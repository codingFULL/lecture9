const express = require('express');
const bodyParser = require('body-parser');

const userRouter = require('./routes/userRoute');

const app = express();
const PORT = 3030;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/', userRouter);

console.log(`The server is runing  http://localhost:${PORT}`);
app.listen(PORT);
