let express = require('express');
let router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* make messages available to the template */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', ((req, res, next)=> {
  res.render('form', { title: "Create a new message" } )
}))

router.post('/new', ((req, res, next)=>{
  messages.push({
    text: req.body.message,
    user: req.body.user,
    added: new Date()
  })
  res.redirect('/')
}))


module.exports = router;
