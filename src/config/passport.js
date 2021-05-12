const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const db = require('../database');

passport.use(
  new passportLocal((username, password, done) => {
    db.query(
      'SELECT * FROM user_admin WHERE username = ?',
      [username],
      async (err, response) => {
        if (err) throw err;
        if(response.length == 0){
          return done(null, false)
        }else{
          const user = response[0];
          const test = await bcrypt.compareSync(password, user.password);
          if (test) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        }
      }
    );
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.query('SELECT * FROM user_admin WHERE id = ?', [id], (err, response) => {
    const user = response[0];
    done(null, user);
  });
});
