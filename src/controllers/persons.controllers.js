const personsCtrl = {};
const database = require('../database.js');

personsCtrl.addUser = (req, res) => {
  const {email, name, location } = req.body;
  if (email && name && location) {
    database.query(
      'INSERT INTO persons SET email = ?, name = ?, location = ?',
      [email, name, location],
      (err, response, field) => {
        if (err) throw err;
        res.redirect('/')
      }
    );
  } else{
    res.redirect('/')
  }
};

module.exports = personsCtrl