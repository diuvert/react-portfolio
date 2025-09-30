import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Contact from './models/contact.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://diuvert_db_user:pAlxFjaUbCFJdLF9@mongonode.oxtazst.mongodb.net/Skeleton?retryWrites=true&w=majority';

const sampleContacts = [
  ['Liam','Nguyen'],
  ['Olivia','Patel'],
  ['Noah','Singh'],
  ['Emma','Garcia'],
  ['Oliver','Chen'],
  ['Ava','Khan'],
  ['Elijah','Martin'],
  ['Sophia','Lopez'],
  ['William','Brown'],
  ['Isabella','Wilson'],
  ['James','Taylor'],
  ['Mia','Anderson'],
  ['Benjamin','Thomas'],
  ['Charlotte','Jackson'],
  ['Lucas','White'],
  ['Amelia','Harris'],
  ['Mason','Clark'],
  ['Harper','Lewis'],
  ['Ethan','Robinson'],
  ['Evelyn','Walker']
];

function makeEmail(first, last) {
  const f = first.replace(/[^a-zA-Z]/g, '').toLowerCase();
  const l = last.replace(/[^a-zA-Z]/g, '').toLowerCase();
  return `${f}.${l}@my.centennialcollege.ca`;
}

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('Connected to MongoDB for seeding');

    // Clear existing contacts
    const del = await Contact.deleteMany({});
    console.log(`Deleted ${del.deletedCount} existing contacts`);
    // assign unique 5-digit customIds
    const docs = sampleContacts.map(([first, last], idx) => {
      const customId = 10000 + idx; // simple deterministic 5-digit ids: 10000..10019
      return {
        customId,
        firstname: first,
        lastname: last,
        email: makeEmail(first, last)
      };
    });

    const inserted = await Contact.insertMany(docs, { ordered: true });
    console.log(`Inserted ${inserted.length} contacts`);
  } catch (err) {
    console.error('Seeding error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected');
  }
}

seed();
