import { initializeExpressApp } from './setup-express';
import { initializeRoutes, initializeErrorRoutes } from './routes';
import { BlogPost } from './models/sql/post/postModel';

const app = initializeExpressApp();
initializeExpressApp(app);
initializeRoutes(app);
initializeErrorRoutes(app);

export default app;
