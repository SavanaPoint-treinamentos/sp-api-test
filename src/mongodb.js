import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';


const url = process.env.MONGODB_URI;

export const connection = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => console.log('DB is connected'))
    .catch(error => console.log(error))
}