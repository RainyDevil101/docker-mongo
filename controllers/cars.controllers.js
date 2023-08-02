import Car from '../models/schema.js';

const getCars = async (_req, res) => {
  console.log('Listing carss...');
  const cars = await Car.find();
  return res.send(cars);
};

const createCar = async (_req, res) => {
  console.log('Creating...');
  await Car.create({ type: 'Honda', status: 'Fixed' });
  return res.send('Created!');
};

export { getCars, createCar };