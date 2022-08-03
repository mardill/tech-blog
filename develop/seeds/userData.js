const { User } = require('../models');

const userdata = [
    {
        email: 'Tech Blogs are Great',
        password: 'Its great to read blogs',
    }
];

const seedContent = () => Content.bulkCreate(userdata);

module.exports = seedContent;