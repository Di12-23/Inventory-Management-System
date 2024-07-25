// backend/server.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import itemroutes from './routes/itemroutes.js';
import orderroutes from './routes/orderroutes.js';
import userroutes from './routes/userroutes.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use('/api/items', itemroutes);
app.use('/api/orders', orderroutes);
app.use('/api/users', userroutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
