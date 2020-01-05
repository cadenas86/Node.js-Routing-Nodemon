var express = require('express');
var router = express.Router();
const storyLine = require('../models/storyLine');

/* GET home page. */
router.get('/begining', function(req, res, next) {
  let begining = storyLine.story.find(story => {
    return story.storyPart === 'begining';
  });
  res.render('begining.hbs', {begining});
});

router.get('/middle', function(req,res,next){
  let middle = storyLine.story.find(story => {
    return story.storyPart === 'middle';
  });
  res.render('middle.hbs', {middle});
});

router.get('/end', function(req,res,next){
  let end = storyLine.story.find(story => {
    return story.storyPart === 'end';
  });
  res.render('end.hbs', {
    end
  });
});

module.exports = router;
