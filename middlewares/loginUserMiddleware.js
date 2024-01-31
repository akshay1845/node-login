const loginUserMiddleware = (schema) => {
    return async (req, res, next) => {
        const { error } = await schema.validate(req.body)
        if (error != null) {
            console.log(error, "error")
            const { details } = error;
            return res.send({ error: details[0]?.message })
        }else{
            next()
        }
    }
}

module.exports = loginUserMiddleware