import usersRouter from './users';
//import graphqlRouter from './graphql';

export const initializeRoutes = (app) => {
  app.use('/users', usersRouter);
  //app.use('/graphql', graphqlRouter);
};

export const initializeErrorRoutes = (app) => {
  app.use((req, res) => res.status(404).send('404 - Not Found'));
  // error handler
  app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    return res.status(err.status || 500).send(err);
  });
};
