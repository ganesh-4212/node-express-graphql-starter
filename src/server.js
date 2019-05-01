import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import config from './config';
import routesConfig from './routes';

const app = express();
const port = process.env.PORT || 8080;
mongoose.connect(config.dbURL, {
  useNewUrlParser: true
});

app.use(morgan('dev'));
app.use(
  bodyParser.urlencoded({
    extended: 'true'
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.json({
    type: 'application/vnd.api+json'
  })
);
app.use(methodOverride('X-HTTP-Method-Override'));

routesConfig(app);
// Creating Apollo server
const server = new ApolloServer({ schema });
server.applyMiddleware({ app });

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log(`GrqphQl Server ready at ${server.graphqlPath}`);
});
