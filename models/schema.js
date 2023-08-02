import mongoose from 'mongoose';

const Car = mongoose.model('Car', new mongoose.Schema({
  type: String,
  status: String,
}));


export default Car;