const router = require('express').Router();
const { Content } = require('../models');

// get posts on homepage
router.get('/:id', (req, res) => {

  Content.findOne(
    {
      where: { 
        id: req.params.id
      },
    }
  ).then((conenttData) => {
    res.json(contentData);
  });
});

  module.exports = router;