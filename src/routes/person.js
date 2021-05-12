const router = require('express').Router();
const { addUser, userExist } = require('../controllers/persons.controllers');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/add-user', userExist, addUser);

module.exports = router;
