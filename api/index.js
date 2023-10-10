import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

dotenv.config();

//Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.log(err);
});

//Initialize express
const app = express();

//Accept JSON from the client request
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

//Create a route
//req = request from the client, res = response from the server

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

//Middleware for error handling
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message
        });
});