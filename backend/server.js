const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const app = express();
const cors = require('cors');
const {
  userRouter,
  classRouter,
  subjectRouter,
  homeworkRouter,
  chatRouter,
  scheduleRouter,
} = require('./routers/');
const announcementRouter = require('./routers/announcement.route');
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
    methods: ['GET', 'POST', 'PATCH'],
    credentials: true,
  })
);
app.use(express.json());

// Routers
app.use('/users', userRouter);
app.use('/classes', classRouter);
app.use('/subjects', subjectRouter);
app.use('/homeworks', homeworkRouter);
app.use('/chats', chatRouter);
app.use('/schedules', scheduleRouter);
app.use('/announcements', announcementRouter);

server.listen(process.env.PORT, () => {
  console.log('Server started');
});

//* Made in honor of E.Enkhbold
