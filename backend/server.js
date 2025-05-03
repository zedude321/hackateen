/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const cors = require('cors');
require('dotenv').config();

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('Connected to DB');
  })
  .catch(err => {
    throw err;
  });

const server = http.createServer(app);

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST'],
    credentials: true,
  })
);
app.use(express.json());

// Routers
// app.use('/users', userRouter);
// app.use('/puzzles', puzzleRouter);
// app.use('/rooms', roomRouter);
// app.use('/items', itemRouter);
// app.use('/experiences', experienceRouter);
// app.use('/cosmetics', cosmeticRouter);

server.listen(process.env.PORT, () => {
  console.log('Server started');
});
