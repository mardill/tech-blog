const { Content } = require('../models');

const contentData = [
    {
        title: 'Tech Blogs are Great',
        body: 'Its great to read blogs',
        publish_date: 'August 04, 2022 17:00:00'
    }
]

const seedContent = () => Content.bulkCreate(contentdata);

module.exports = seedContent;