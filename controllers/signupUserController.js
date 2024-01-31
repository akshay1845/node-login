const bcrypt = require('bcrypt')

const signupUserController = (collection) => {
    return async (req, res, next) => {
        const { email, password } = req.body
        let checkData = await collection.findOne({ email })

        console.log(checkData, "checkData")

        if (checkData == null) {
            let hashPwd = await bcrypt.hash(password, 10)
            const sendData = await collection.create({ ...req.body, password: hashPwd })
            return res.send(sendData)
        } else {
            return res.send("email already exist")
        }
    }
}

module.exports = signupUserController