console.log(":)")

var vm = new Vue({
    el: '#app',
    
    data: {
        title: 'McClellan!',
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
  ],
        about: {
            title: 'About',
            paragraph: 'asdfghjkrt seraweretrytuyis dzfdgxfhgcbm rljksdfljkadjkgjkag dakgj adjkgjkaldgh kj gjhakdgjkkajg f.??',
            linkLabel: 'Click for a fun time'
        }
    },
    
    methods: {
        prettyDate: function (date) {
            return date.getMonth() + '/' + date.getDate() + '/' + date.getFullYear()
        },
        prettyTimeAndDate: function (date) {
            return this.prettyTime(date) + ' ' + this.prettyDate(date)  
        },
        prettyTime: function (date) {
            var militaryHours = date.getHours()
            var hours =
                (militaryHours === 0) ? 12 :
                (militaryHours > 12) ? militaryHours - 12 :
                militaryHours
            var amPm = (militaryHours > 11) ? 'pm' : 'am'
            var minutes = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes()
            return hours + ':' + minutes + amPm
        }
    }
})