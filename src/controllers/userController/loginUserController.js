require('dotenv').config();
const { User } = require('../../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { DB_NAME } = process.env;

const loginUser = async (email, password) => {
    const user = await User.findOne({ where: { email }});
    const validatePassword = await bcrypt.compare(password, user.password);

    if(validatePassword) {
        return jwt.sign({ email }, DB_NAME , { expiresIn: '24h'});    
    }

    return false

}

module.exports = loginUser;
