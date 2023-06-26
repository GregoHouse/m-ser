const {RecoveryCode, User} = require('../../db');
const bcrypt = require('bcrypt');

const resetPassword = async (email, code, newPassword) => {
    const validateCode = await RecoveryCode.findOne({
        where: {
            email,
            code
        }
    });

    if (validateCode) {
        let passwordcrypt = await bcrypt.hash(newPassword, 8);
        await User.update({
            password: passwordcrypt
        }, {
            where:
            {
                email    
            }
        })

        await validateCode.destroy()
        return true
    }
    return false
}

module.exports = resetPassword;
