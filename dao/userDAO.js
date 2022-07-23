const User = require('../models/User');

var userDao = {
    create: create,
    loginUser: loginUser
}


function create(user){
    return User.create(user);
}


async function loginUser(email){
    return await User.findOne({where : {email: email}})
}

module.exports = userDao;