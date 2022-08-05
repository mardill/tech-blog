const router = require('express').Router();
const { Content, Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

// get one post
// router.get('/:id', async (req, res) => {

//   Content.findOne({

//     where: {
//       id: req.params.id
//   },
//     attributes: [
//       'id',
//       'title',
//       'body',
//       'publish_date'
//     ]
//   })
//     .then(contentData => {
//       const contents = contentData.map(content => content.get({ plain: true }));
//       res.render('single-post', {
//         contents,
//       })
//     })
//     .catch(err => {
//       res.status(500).json(err);
//     })
  
//   });

  



  module.exports = router;