import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 12);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("User created successfully");
    } catch (error) {
        next(error);
    }
};

export const signIn = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        //Check if user exists
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, "User not found"));;
        }

        //Check if password is correct
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Wrong credentials!"));
        }
        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

        //Send response without password field
        const { password: userPassword, ...user } = validUser._doc;

        //Create a cookie with hashed token
        res.cookie('access_token', token, {
            httpOnly: true
        }).status(200).json({ user });

    } catch (error) {
        next(error);
    }
}
