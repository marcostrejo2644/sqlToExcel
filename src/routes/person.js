const router = require('express').Router();
const { addUser } = require('../controllers/persons.controllers');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/add-user', addUser);

module.exports = router;
