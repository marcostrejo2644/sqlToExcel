const router = require('express').Router();
const database = require('../database.js');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/add-user', (req, res) => {
  const { name, email, address, age, telephone } = req.body;
  console.log(name, email, address, age, telephone);
  if (name && email && address && age && telephone) {
    database.query(
      'INSERT INTO persons SET name = ?, email = ?, address = ?, age = ?, telephone = ?',
      [name, email, address, age, telephone],
      (err, response, field) => {
        if (err) throw err;
        console.log(response);
      }
    );
  }
  res.send('Saved');
});

// Para DEV
router.post('/delete-user/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  database.query('DELETE FROM persons WHERE id = ?', [id], (err, response) => {
    if (err) throw err;
    console.log('Deleted Item: ', id);
  });
  res.send('Item Deleted');
});

module.exports = router;
