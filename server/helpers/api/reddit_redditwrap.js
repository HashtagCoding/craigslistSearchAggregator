// https://github.com/cthuluhoop123/redditwrap.js/blob/master/lib/main.js

const redditjs = require('redditwrap.js');
require('dotenv').config();

// let reddit = new redditjs({
//   useragent: req.headers['user-agent'],
//   username: process.env.REDDIT_CLIENT_ID,
//   password: PASSWORD,
//   clientID: process.env.REDDIT_CLIENT_ID,
//   clientSecret: process.env.REDDIT_CLIENT_SECRET,
// });

let getReddit2 = new redditjs({
  useragent: 'my user agent',
  username: 'some_user_on_reddit',
  password: 'thisisIT&13',
  clientID: 'F87LEkklG2vX1A',
  clientSecret: 'RNaBVhXvL4S8oWFRQASo0e5I0DA',
});

// getReddit2.on('ready', () => {
//   getReddit2.submitTextPost('test', 'Hello World!', 'My first text post!')
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => {
//       console.log(err)
//     })
// })

// getReddit2.on('message', message => {
//   message.reply("beep boop!")
// })

const getReddit = (req, res) => {
  // console.log('hey ma current user', getReddit2.getCurrentUser());
}

module.exports = { getReddit };
