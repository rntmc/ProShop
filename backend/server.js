import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
dotenv.config();
import connectDB from './config/db.js';
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

const PORT = process.env.PORT || 5000;

connectDB();

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Cookie parser middleware - allow us to access req.cookies
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))