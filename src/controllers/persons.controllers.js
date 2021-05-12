const personsCtrl = {};
const database = require('../database.js');

personsCtrl.userExist = (req, res, next) => {
  const { email } = req.body;
  if(email){
    database.query('SELECT * FROM mysql_excel.persons WHERE email = ?', [email],
    (err, response, field) => {
      if(err) throw err;
      if(response.length == 0) next();
      else res.render('form', { message: true })
    });
  }else {
    res.send('failed')
  }
}

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