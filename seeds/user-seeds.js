const { User } = require('../models');

const userData = [
    {
        username: "charles_darwin",
        email: "charles_darwin@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "shaun_white",
        email: "shaun_white@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "edward_scissorhands",
        email: "edward_scissorhand@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "bruce_lee",
        email: "bruce_lee@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "winston_churchill",
        email: "winston_churchill@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "mahatma_ghandi",
        email: "mahatma_ghandi@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;