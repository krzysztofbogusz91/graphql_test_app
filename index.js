const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js')

const PORT = process.env.PORT || 5000

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(PORT), () => console.log('server started on port ', PORT);