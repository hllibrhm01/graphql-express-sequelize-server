import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import expressSession from 'express-session';

import indexRouter from './routes/index';
import usersRouter from './routes/users';

export const initializeExpressApp = () => {
  const app = express();

  app.set('views', path.join(__dirname, ''));
  app.set('view engine', 'jade');

  app.use(cors());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(
    expressSession({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
    })
  );

  return app;
};
