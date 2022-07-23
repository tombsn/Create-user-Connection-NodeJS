const userDao = require('../dao/userDAO.js');
const bcrypt = require('bcrypt');

var userController= {
  addUser: addUser,
  loginUser: loginUser,
}


//----------------------------Add User----------------------------//
function addUser(req, res){
  let user = req.body;
  
  bcrypt.hash(user.password, 10)
    .then((hash) => {
      user.password = hash
      
      //Create user
      userDao.create(user)
        .then( data => {
          console.log("User added");
          res.send(data);
        })
        .catch(error => {
          console.log(error);
            res.status(500).send({
              message:
                error.message || "Some error occurred while creating the User."
            });
        })
    })
}


//----------------------------Login User----------------------------//
function loginUser(req, res){
  let email = req.body.email;
  let password = req.body.password;
  userDao.loginUser(email)
    .then(user => {
      if (!user) {
        return res.status(401).json({ error : "User not found !"});
      }
      bcrypt.compare(password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error : "Invalid password !"})
          }
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};


module.exports = userController