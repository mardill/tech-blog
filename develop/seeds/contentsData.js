const { Content } = require('../models');

const contentdata = [
    {
        title: 'Tech Blogs are Great',
        body: 'Its great to read blogs',
        publish_date: 'August 04, 2022'
    }
];

const seedContent = () => Content.bulkCreate(contentdata);

module.exports = seedContent;