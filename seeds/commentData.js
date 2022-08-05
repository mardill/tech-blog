const { Comment } = require('../models');

const commentdata = [
    {
        text: 'great post',
        user_id: '1',
        content_id: '1'
    }
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;