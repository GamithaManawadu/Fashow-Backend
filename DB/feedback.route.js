const express = require('express');
const feedbackRoutes = express.Router();

// Require Business model in our routes module
let Feedback = require('./feedback.model');


// Defined get data(index or listing) route
feedbackRoutes.route('/').get(function (req, res) {
    Feedback.find(function(err, feedback){
    if(err){
      console.log(err);
    }
    else {
      res.json(feedback);
    }
  });
});


// Defined delete | remove | destroy route
feedbackRoutes.route('/delete/:id').get(function (req, res) {
    Feedback.findByIdAndRemove({_id: req.params.id}, function(err, feedbak){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});



module.exports = feedbackRoutes;