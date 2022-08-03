const router = require('express').Router();
const { Content } = require('../models/Content');

// get posts on homepage
router.get('/:id', (req, res) => {
  console.log(req)

  Content.findOne(
    {
      where: { 
        id: req.params.id
      },
    }
  ).then((contentData) => {
    res.json(contentData);
  });
});

  module.exports = router;