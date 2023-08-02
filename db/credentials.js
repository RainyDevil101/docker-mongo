import 'dotenv/config';

const username = process.env.USERNAMEDB;
const password = process.env.PASSWORD;
const port = process.env.PORT;

export {
  username,
  password,
  port
};