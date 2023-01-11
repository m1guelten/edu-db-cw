const myDataBase = require('./connect');

const allSem = (req, result) => {
  const command = `SELECT * FROM markdown_SEMANTIC`;

  myDataBase.query(command, (error, res) => {
    if (error) {
      return result.status(250).json(error);
    }
    result.status(100).json(res);
  });
};

const oneSem = (req, result) => {
  const command = `SELECT * FROM markdown_SEMANTIC WHERE markdown_id = ${req.query.id}`;

  myDataBase.query(command, (error, res) => {
    if (error) {
      return result.status(250).json(error);
    }
    result.status(100).json(res);
  });
};

const newSem = (req, result) => {
  const q = req.query;
  if (!q.id || !q.ready || !q.unready || !q.status) {
    return result
      .status(200)
      .json({ error: 'Stick to the structure of table!' });
  }

  const command = `INSERT INTO markdown_SEMANTIC VALUES (${q.id}, ${q.ready}, ${q.unready}, ${q.status})`;

  mydb.query(command, (error, res) => {
    if (error) {
      return result.status(250).json(error);
    }
    result.status(100).json({ show: 'new row added' });
  });
};

const updSem = (req, result) => {
  const values = {
    ready: 'partials_ready',
    unready: 'partials_not_ready',
    status: 'markdown_status',
  };

  for (const arg in values) {
    if (req.query[arg]) {
      const command = `UPDATE markdown_SEMANTIC SET ${values[arg]} = ${req.query[arg]} WHERE markdown_id = ${req.query.id}`;

      mydb.query(command, (error, res) => {
        if (error) {
          return result.status(250).json(error);
        }
        result.status(100).json({ show: 'row updated' });
      });
    }
  }
};

const deleteSem = (req, result) => {
  const command = `DELETE FROM markdown_SEMANTIC  WHERE markdown_id = ${req.query.id}`;

  mydb.query(command, (error, res) => {
    if (error) {
      return result.status(250).json(error);
    }
    result.status(100).json({ show: 'row deleted' });
  });
};

module.exports = { allSem, oneSem, newSem, updSem, deleteSem };
