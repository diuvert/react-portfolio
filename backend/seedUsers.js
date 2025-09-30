import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/user.js';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://diuvert_db_user:pAlxFjaUbCFJdLF9@mongonode.oxtazst.mongodb.net/Skeleton?retryWrites=true&w=majority';

const sampleUsers = [
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
    console.log('Connected to MongoDB for user seeding');

    // Clear existing users
    const del = await User.deleteMany({});
    console.log(`Deleted ${del.deletedCount} existing users`);

    const now = Date.now();
    const docs = [];
    for (let i = 0; i < sampleUsers.length; i++) {
      const [first, last] = sampleUsers[i];
      const email = makeEmail(first, last);
      const passwordPlain = 'Password123!';
      const hashed = await bcrypt.hash(passwordPlain, 10);
      const customId = 20000 + i; // deterministic 5-digit ids: 20000..20019
      docs.push({
        customId,
        name: `${first} ${last}`,
        email,
        password: hashed,
        created: now,
        updated: now
      });
    }

    const inserted = await User.insertMany(docs, { ordered: true });
    console.log(`Inserted ${inserted.length} users`);
  } catch (err) {
    console.error('User seeding error:', err);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected');
  }
}

seed();
