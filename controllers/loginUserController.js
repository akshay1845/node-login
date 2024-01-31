const bcrypt = require('bcrypt')

const loginUserController = (collection) => {
    return async (req, res, next) => {
        const { email, password } = req.body
        let checkData = await collection.findOne({ email })

        if (checkData !== null) {
            const isMatchPassword = await bcrypt.compare(password, checkData.password)
            if (isMatchPassword) {
                return res.send(checkData)
            } else {
                return res.send("Password doesn't match")
            }
        } else {
            return res.send("Email is not part of our system")
        }
    }
}

module.exports = loginUserController