import { Router } from 'express';
import graphqlHTTP from 'express-graphql';
// import { schema } from '../models/graphql/schema/schema';
// /import { main } from '../models/graphql/main/main';

const router = Router();

router.use('/', graphqlHTTP({
  // schema,
  rootValue: main,
  graphiql: true,
}));
/*
router.get('/', graphqlHTTP({
  schema,
  rootValue: main,
  graphiql: true,
}));
*/

export default router;
