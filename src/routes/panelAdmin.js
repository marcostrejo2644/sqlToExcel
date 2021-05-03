const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const dbUser = require('../database');
const excel = require('exceljs');

router.get('/', (req, res) => {
  res.redirect('/panel-admin/login')
});

//Acceder al panel
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/panel-admin/dashboard',
    failureRedirect: '/panel-admin/login',
  })
);

router.get('/dashboard',
(req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.redirect('/panel-admin/login');
  }, (req, res) => {
    res.render('dashboard', {layout: false});
  }
);

router.post('/logout', (req, res) => {
  req.logout();
  res.redirect('/panel-admin/login');
})

// Bajar Excel
router.post('/user-download',
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.redirect('/panel-admin/login');
  }, (req, res) => {
    dbUser.query('SELECT * FROM persons', (err, response, fields) => {
      if (err) throw err;
      const data = response;
      let excelData = new excel.Workbook();
      let testExcel = excelData.addWorksheet('users');
      testExcel.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 10 },
        { header: 'Email', key: 'email', width: 10 },
        { header: 'Address', key: 'address', width: 10 },
        { header: 'Age', key: 'age', width: 10 },
        { header: 'Telephone', key: 'telephone', width: 10 },
      ];
      testExcel.addRows(data);
      excelData.xlsx.writeFile('users.xlsx').then((d) => {
        res.download('users.xlsx')
      });
    });
});


// Manejar Administradores
// Add Admin User DEV
router.post('/new-admin', (req, res) => {
  const { passwordO, useradmin } = req.body;
  //encriptacion de password
  const salt = bcrypt.genSaltSync(10);
  const password = bcrypt.hashSync(passwordO, salt);

  if (password && useradmin) {
    dbUser.query(
      'INSERT INTO user_admin SET username = ?, password = ?',
      [useradmin, password],
      (err, response) => {
        if (err) throw err;
        console.log(response);
      }
    );
  }
  res.send('User is Saved');
});

// Eliminar Administrador
router.post('/delete-user/:id', (req, res) => {
  const { id } = req.params;
  console.log(id);
  database.query('DELETE FROM user_admin WHERE id = ?', [id], (err, response) => {
    if (err) throw err;
    console.log('Deleted Item: ', id);
  });
  res.send('Item Deleted');
});

module.exports = router;
