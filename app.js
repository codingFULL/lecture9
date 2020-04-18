const express = require('express');
const userRouter = require('./routes/userRoute');

const app = express();
const PORT = 3030;

app.use('/', userRouter);

console.log(`The server is runing  http://localhost:${PORT}`);
app.listen(PORT);
