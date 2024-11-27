const express = require('express');
const router = express.Router(); // router object figures out what code to run in response to requests. Typically based on the url and the method, GET, POST, etc...

// req = request, res = response, next can be used to pass the request to something else
router.get('/', function (req, res, next) {
  // name of Handlebars file - name of a templat, optional object with data for the template
  res.render('index', {
    title: 'Feedback Application',
    author: 'Tyson',
    timePageLoadedAt: new Date(),
  });
}); //get request to the home page

// route to new page
router.get('/feedback-form', function(req, res, next) {
  res.render('student_feedback_form')
})

router.post('/submit-feedback', function(req, res, next){
  // server should acces form data and show a new page that says thank you showing data 
  //const formData = req.query // for a GET request, we read the url query. 
  const formData = req.body // for a POST request

  console.log(formData)

  // todo - save to a database

  // automatically email someone when feedback is submitted

  res.render('thank_you', {
    name: formData.name,
    email: formData.email,
    comments: formData.comments,
    currentStudent: formData['current-student']
  })
})

module.exports = router; // return router object to whatever else requires the file
