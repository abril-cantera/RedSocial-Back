const express = require('express')
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/error.handler');

const app = express()

const port = process.env.PORT || 3000

app.use(express.json());

const whitelist = ['http://18.191.55.134:3000/red/user', 'http://localhost:3000/#/', 'http://localhost:3000', 'http://abrilgonzalez-com.stackstaging.com', 'http://abrilgonzalez-com.stackstaging.com/', 'http://abrilgonzalez-com.stackstaging.com/#/', 'http://abrilgonzalez-com.stackstaging.com/#'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

routerApi(app)
app.listen(port, () => {
  console.log(`Mi port ${port}`);
})