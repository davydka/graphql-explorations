const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', expressGraphQL({
  schema: schema, // could be jsut schema (via es6)
  graphiql: true
}));

app.listen(4000, () => {
  console.log('listening');
});
