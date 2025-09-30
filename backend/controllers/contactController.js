import Contact from '../models/contact.js';

// helper to generate a unique 5-digit customId
async function generateUniqueCustomId(model) {
  for (let i = 0; i < 10; i++) {
    const id = Math.floor(10000 + Math.random() * 90000);
    const exists = await model.findOne({ customId: id });
    if (!exists) return id;
  }
  throw new Error('Failed to generate unique customId');
}

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findOne({ customId: Number(req.params.id) });
    if (!contact) return res.status(404).json({ error: 'Not found' });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contact' });
  }
};

export const createContact = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    const customId = await generateUniqueCustomId(Contact);
    const contact = new Contact({ customId, firstname, lastname, email });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create contact' });
  }
};

export const updateContact = async (req, res) => {
  try {
    const { firstname, lastname, email } = req.body;
    const contact = await Contact.findOneAndUpdate(
      { customId: Number(req.params.id) },
      { firstname, lastname, email },
      { new: true }
    );
    if (!contact) return res.status(404).json({ error: 'Not found' });
    res.json(contact);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update contact' });
  }
};

export const deleteContactById = async (req, res) => {
  try {
    const contact = await Contact.findOneAndDelete({ customId: Number(req.params.id) });
    if (!contact) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
};

export const deleteAllContacts = async (req, res) => {
  try {
    const result = await Contact.deleteMany({});
    res.json({ deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contacts' });
  }
};
