console.log("hello world")
var express = require('express');
var app = express();

var db = {
  blogPosts: [
    {
        id: "pffffff",
        title: 'Pffffff',
        author: 'Calee',
        date: new Date('2017/06/28'),
        blurb:  "I don't know my best friend's birthday."
      }, 
      {
        id: "elm-is-life",
        title: 'Elm is Life',
        author: 'Ryan',
        date: new Date('2017/06/27'),
        blurb:  "I know my best friend's birthday. It's the day Elm was invented."
      }
  ],
  events: [
      {
          id: 'party',
          title: 'Party',
          location: 'Dickenson',
          time: new Date('2017/06/28 20:00')
      }, 
      {
          id: 'learn-elm',
          title: 'Learn Elm',
          location: "Cool Kid's House",
          time: new Date('2017/06/29 8:00')
      }
  ]
}

app.use(express.static("public"))

app.get('/', function(req, res){
  res.sendFile(__dirname+"/public/index.html");
});

app.get('/events/:id', function(req, res){
  var event = getItem(db.events, req.params.id)
  res.json(event)
});
app.get('/blog/:id', function(req, res){
  var post = getItem(db.blogPosts, req.params.id)
  res.json(post)
});

function getItem (items, id) {
  var matchingItems = items.filter(function (item) {
    return item.id === id
  })
  return matchingItems[0]
}

app.listen(process.env.PORT || 3000);
