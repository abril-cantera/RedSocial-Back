const express = require('express')
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
} = require('./middlewares/error.handler');

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())


app.use(cors());

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

routerApi(app)
app.listen(port, () => {
  console.log(`Mi port ${port}`);
})