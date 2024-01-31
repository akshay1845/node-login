const joi = require('joi')
const signupSchema = joi.object({
    name : joi.string().required().messages({
        'any.required' : 'Name is required'
    }),
    email : joi.string().regex(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).required().messages({
        'any.required' : 'Email is required',
        'string.pattern.base'  :'Please enter valid email'
    }),
    age : joi.number().required().messages({
        'any.required' : 'Age is required',

    }),
    contact : joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required().messages({
        'any.required' : 'Contact is required',
        "number.max" : "Conact number must be valid",
        "number.min" : "Conact number must be valid"
    }),
    password : joi.string()
    // .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/)
    .required().messages({
        'any.required' : 'Password is required',
        'string.pattern.base' : "Password must be valid"
    })
})

const loginSchema = joi.object({
    email : joi.string().regex(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).required().messages({
        'any.required' : 'Email is required',
        'string.pattern.base'  :'Please enter valid email'
    }),
    password : joi.string()
    // .regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/)
    .required().messages({
        'any.required' : 'Password is required',
        'string.pattern.base' : "Password must be valid"
    })
})

module.exports = {signupSchema, loginSchema}