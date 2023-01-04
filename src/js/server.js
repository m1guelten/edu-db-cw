const express = require('express');
const db = require('./database');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  db.query('SELECT * FROM files;', (err, files) => {
    if (err) {
      console.log(err);
      return;
    }

    res.status(201).json({ data: files });
  })
});

app.get('/:id', (req, res) => {
  const {id} = req.params;
  console.log(id);
  db.query(`SELECT * FROM files WHERE file_id = ${id}`, (err, file) => {
    if (err) {
      console.log(err);
      return;
    }

    if (!file) {
      console.log('There is no file with such id');
      return;
    }

    res.status(201).json({ data: file });
  });
})

app.post('/', (req, res) => {
  const {
    file_id,
    file_name,
    admin_id,
    branch1,
    branch2,
    original,
    final_NER,
    final_SEMANTIC,
    final_INTENTION
  } = req.body;
  if (
    file_id &&
    file_name &&
    admin_id &&
    branch1 &&
    branch2 &&
    original &&
    final_NER &&
    final_SEMANTIC &&
    final_INTENTION
  ) {
    try {
      db.promise().query(`INSERT INTO files(file_id, file_name, admin_id, branch1, branch2, original, final_NER, final_SEMANTIC, final_INTENTION) VALUES("${file_id}", "${file_name}", "${admin_id}", "${branch1}", "${branch2}", "${original}", "${final_NER}", "${final_SEMANTIC}", "${final_INTENTION}")`);
    res.status(201).send({msg: 'Created User' });
    } catch (err) {
      console.log(err);
      return;
    }
  } else {
    console.log('Wrong data provided');
    res.send('Wrong data provided');
  }
})

app.put('/:id', (req, res) => {
  const {id} = req.params;
  db.query(`SELECT * FROM files WHERE file_id = ${id}`, (err, [file]) => {
    if (err) {
      console.log(err);
      return;
    }
    
    if (!file) {
      res.status(500).json({ message: 'There is no such file'})
      console.log('There is no file with such id');
      return;
    }

    let query = "UPDATE files SET ";

    console.log(req.body);
    for (key of Object.keys(file)) {
      console.log(key);
      if (req.body[key]) {
        query += `${key} = '${req.body[key]}'`;
      }
    }
    query += `WHERE file_id = ${id}`;
    db.query(query, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      res.status(201).send(`Changed lines ${Object.keys(req.body)} in file ${id}`);
    })
  }); 
})

app.delete('/:id', (req, res) => {
  const {id} = req.params;

  db.query(`SELECT * FROM files WHERE file_id = ${id}`, (err, file) => {
    if (err) {
      console.log(err);
      return;
    }
    if (file.length == 0) {
      res.json({ error: "There is no such user" });
      return;
    }

    db.query(`DELETE FROM files WHERE file_id = ${id}`, (err) => {
      if (err) {
        console.log(err);
        res.status(404).json({ error: err });
        return;
      }
      res.json({ message: `User ${id} deleted` });
    })
  })
})

app.listen(port, () => {
  console.log(`Server now listening on port ${port}`);
})