import express from 'express';
import bodyParser from 'body-parser';

import playerRouter from './resources/players/player.router.js';
import teamRouter from "./resources/teams/team.router.js";
import trophyRouter from "./resources/trophies/trophy.router.js";

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/players', playerRouter);
app.use('/teams', teamRouter);
app.use('/trophies', trophyRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

export default app;