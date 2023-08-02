import mongoose from 'mongoose';
import { username, password } from './credentials.js';

const dbConnection = async () => {
  try {
    await mongoose.connect(`mongodb://${username}:${password}@localhost:27017/myapp?authSource=admin`);
  } catch (error) {
    console.log(error);
    throw new Error('Error');
  }
};

export { dbConnection };