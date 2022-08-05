const { Content } = require('../models');

const contentdata = [
    {
        title: 'Learning about MVCs',
        body: 'The Model-View-Controller (MVC) is an architectural pattern that separates an application into three main logical components: the model, the view, and the controller',
        publish_date: 'August 04, 2022 17:00:00',
        user_id: '1'
    },
    {
        title: 'You Should Read Tech Blogs',
        body: 'There are a ton of tech blogs to read.',
        publish_date: 'August 03, 2022 15:00:00',
        user_id: '1'
    },
    {
        title: 'Learning Javascript',
        body: 'This is why you should learn javascript.',
        publish_date: 'August 02, 2022 12:00:00',
        user_id: '1'
    },

];

const seedContent = () => Content.bulkCreate(contentdata);

module.exports = seedContent;