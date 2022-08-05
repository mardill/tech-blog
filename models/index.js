const Content = require('./Content');
const User = require('./User');
const Comment = require('./Comment');

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Content.belongsTo(User, {
    foreignKey: 'user_id'
});

Content.hasMany(Comment, {
    foreignKey: 'content_id'
});


module.exports = { Content, User, Comment };
