import { initializeExpressApp } from './setup/setup-express';
import { initializeRoutes, initializeErrorRoutes } from './routes';
import Database from './models/sql';

const app = initializeExpressApp();
initializeExpressApp(app);
initializeRoutes(app);
initializeErrorRoutes(app);

export default app;
