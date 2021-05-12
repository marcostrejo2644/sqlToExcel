const panelAdmin = {};
const bcrypt = require('bcryptjs');
const passport = require('passport');
const dbUser = require('../database');
const excel = require('exceljs');

// Render Sections
panelAdmin.renderLogin = (req, res) => {
  res.render('login');
}

panelAdmin.renderDashboard = (req, res) => {
  res.render('dashboard', {layout: false});
};

panelAdmin.redirectLogin = (req, res) => {
  res.redirect('/panel-admin/login')
}

// Authenticate
panelAdmin.authenticate =  passport.authenticate('local', {
  successRedirect: '/panel-admin/dashboard',
  failureRedirect: '/panel-admin/login',
});

panelAdmin.authenticateNext = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  else res.redirect('/panel-admin/login');
};

// Logout Dashboard
panelAdmin.logout = (req, res) => {
  req.logout();
  res.redirect('/panel-admin/login');
};

// Download Excel
panelAdmin.downloadExcel = (req, res) => {
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
}



module.exports = panelAdmin;