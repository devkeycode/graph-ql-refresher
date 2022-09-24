const express = require("express");
const app = express();

const resolvers = require("./resolvers");
const schema = require("./shema");

const { graphqlHTTP } = require("express-graphql");

app.get("/", (req, res) => {
  res.send("D");
});

const root = resolvers;
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(8000, () => {
  console.log("listening on port 8000");
});

