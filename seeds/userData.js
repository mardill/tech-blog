const { User } = require('../models');

const userdata = [
    {
        email: 'mary@gmail.com',
        password: '1234',
    }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;