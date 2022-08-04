const router = require('express').Router();
const { rest } = require('lodash');
const { Content } = require('../models');

router.get('/', async (req, res) => {

  // res.render('homepage');

  Content.findAll({
    attributes: [
      'id',
      'title',
      'body',
      'publish_date'
    ]
  })
    .then(contentData => {
      const contents = contentData.map(content => content.get({ plain: true }));
      res.render('homepage', {
        contents,
      })
    })
    .catch(err => {
      res.status(500).json(err);
    })
  
  });

  router.get('/signup', (req,res) => res.render('signup'))

  module.exports = router;