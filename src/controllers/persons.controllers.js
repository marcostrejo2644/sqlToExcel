const personsCtrl = {};
const database = require('../database.js');

personsCtrl.renderForm = (req, res) => {
  res.render('form', {message: false});
};

personsCtrl.userExist = (req, res, next) => {
  const { email } = req.body;
  if(email){
    database.query('SELECT * FROM mysql_excel.persons WHERE email = ?', [email],
    (err, response, field) => {
      if(err) throw err;
      if(response.length == 0) next();
      else res.render('form', { 
        message: true, 
        content: 'El email ya esta registrado'
      })
    });
  }else {
    res.render('form', {
      message: true,
      content: 'Ingresa todos los campos para poder registrarte'
    })
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
        res.render('form', { 
          message: true, 
          content: 'Registrado correctamente para el concurso'
        })
      }
    );
  } else{
    res.redirect('/')
  }
};

module.exports = personsCtrl