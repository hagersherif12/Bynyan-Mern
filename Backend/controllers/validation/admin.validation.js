const joi = require("joi");

const loginSchema= joi.object({
    email:joi.string().email().required(),
    password:joi.string().min(6).required(),
})
// openssl rand -bases 64 >>for secret
// rate limit express for num requestes

module.exports = loginSchema;