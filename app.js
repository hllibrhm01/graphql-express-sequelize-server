import { initializeExpressApp } from './setup/setup-express';
import { initializeRoutes, initializeErrorRoutes } from './routes';
import setupGraphQL from './setup/graphql';
import setupStartServer from './setup/startServer';

const app = initializeExpressApp();
initializeExpressApp(app);
initializeRoutes(app);
initializeErrorRoutes(app);
setupGraphQL(app);
setupStartServer(app);

export default app;
