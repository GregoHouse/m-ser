const {RecoveryCode, User} = require('../../db');

const resetPassword = async (email, code, newPassword) => {
    const validateCode = await RecoveryCode.findOne({
        where: {
            email,
            code
        }
    });

    if (validateCode) {
        await User.update({
            password: newPassword
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
