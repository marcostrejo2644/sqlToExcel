const router = require('express').Router();
const { addUser, userExist, renderForm } = require('../controllers/persons.controllers');

router.get('/', renderForm);

router.post('/add-user', userExist, addUser);

module.exports = router;
