const bcrypt = require('bcryptjs');
const users = [
    {
        name: "sam",
        email: "sam123@gmail.com",
        password: bcrypt.hashSync("12345678", 10),
        isAdmin: true
    },
    {
        name: "max",
        email: "max123@gmail.com",
        password: bcrypt.hashSync("12345678", 10)
    },
    {
        name: "josh",
        email: "josh123@gmail.com",
        password: bcrypt.hashSync("12345678", 10)
    },
    {
        name: "wilco",
        email: "wilco123@gmail.com",
        password: bcrypt.hashSync("12345678", 10)
    },
]

module.exports = users;