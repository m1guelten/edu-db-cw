const express = require('express');
const database = express();
const router = express.Router();

const PORT = 3000;

const myDataBase = require('./connect');

const oneSem = require('./usage');
const allSem = require('./usage');
const updSem = require('./usage');
const deleteSem = require('./usage');
const newSem = require('./usage');

database.use(express.json());

router
  .get('/all', allSem)
  .get('/get', oneSem)
  .put('/upd', updSem)
  .delete('/del', deleteSem)
  .post('/new', newSem);

database.use('/', router);

myDataBase.connect(() =>
  database.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  })
);
