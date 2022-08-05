const { Content } = require('../models');

const contentdata = [
    {
        title: 'Learning about MVCs',
        body: 'The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller',
        publish_date: 'August 04, 2022',
        user_id: '1'
    }
];

const seedContent = () => Content.bulkCreate(contentdata);

module.exports = seedContent;