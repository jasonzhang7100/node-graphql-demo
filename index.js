import Koa from 'koa';
import Router from 'koa-router';
import { buildSchema } from 'graphql';
import graphqlHTTP from 'koa-graphql';
import { nanoid } from 'nanoid';

const app = new Koa();
const router = new Router();

const schema = buildSchema(`
  type User {
    id: ID!
    name: String
    age: Int
  }

  type Query {
    user: User
  }
`);

const rootValue = {
  user: () => ({
    id: nanoid(),
    name: 'Jason',
    age: 35,
  }),
};

router.all(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.use(router.routes(), router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
