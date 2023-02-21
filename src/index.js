const bearerToken = require('express-bearer-token');
const oktaAuth = require('./auth');
const app = express()
  .use(cors())
  .use(bodyParser.json())
  .use(bearerToken())
  .use(oktaAuth)
  .use(events(connection));