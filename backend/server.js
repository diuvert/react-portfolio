import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import contactRoutes from './routes/contacts.js';
import userRoutes from './routes/users.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://diuvert_db_user:pAlxFjaUbCFJdLF9@mongonode.oxtazst.mongodb.net/Skeleton?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);

// Friendly API index
app.get('/api', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Portfolio backend API',
    endpoints: ['/api/contacts', '/api/users']
  });
});

app.get('/', (req, res) => {
  res.json({message: 'Welcome to My Portfolio Application' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
