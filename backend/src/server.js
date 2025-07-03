import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { ConnectToDataBase } from './config/connectToDB.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

app.use('/', postRoutes);

ConnectToDataBase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
