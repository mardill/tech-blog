const router = require('express').Router();
const { Content, User } = require('../models');
const withAuth = require('../utils/auth');

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
    .then(contentsData => {
      const contents = contentsData.map(content => content.get({ plain: true }));
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
      ],
      include: [
        { model: User, 
        attributes: ['email','password']
        }
      ]
    })
      .then(contentsData => { 
        const content = contentsData.get({ plain: true });
        res.render('singlepost', {
          content,
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
    
    });
  

  router.get('/signup', (req,res) => res.render('signup'))


  router.get('/login', (req, res) => {

    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  


  module.exports = router;