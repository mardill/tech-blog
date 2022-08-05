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


  router.get('/content/:id', async (req, res) => {

    Content.findOne({
  
      where: {
        id: req.params.id
    },
      attributes: [
        'id',
        'title',
        'body',
        'publish_date'
      ]
    })
      .then(contentData => { 
        const contents = content.get({ plain: true });
        res.render('singlepost', {
          contents,
        })
      })
      .catch(err => {
        res.status(500).json(err);
      })
    
    });
  

  router.get('/signup', (req,res) => res.render('signup'))

  router.get('/login', (req,res) => res.render('login'))


  module.exports = router;