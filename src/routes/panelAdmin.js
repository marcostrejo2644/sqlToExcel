const router = require('express').Router();
const { 
  renderLogin,
  renderDashboard,
  authenticate,
  authenticateNext,
  logout,
  downloadExcel,
  redirectLogin
} = require('../controllers/panelAdmin.controllers')


//Acceder al panel
router.get('/', redirectLogin);

router.get('/login', renderLogin);

router.post('/login', authenticate);

router.get('/dashboard', authenticateNext, renderDashboard);

router.post('/logout', logout)

// Bajar Excel
router.post('/user-download', authenticateNext, downloadExcel);


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
