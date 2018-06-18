const express = require('express');
const path = require('path');
// const router = require('express').Router();
// const router = require('./router/router.js')
const IP = process.env.IP || 'localhost';
const PORT = process.env.PORT || '3002';
const app = express();
const bodyParser = require('body-parser');
const api = require('../server/helpers/api');

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/images/instagram', api.instagram.getInstagramUserImages);
app.get('/images/twitter', api.twitter);
app.get('/craigslist', api.craigslist.getCraigslistFeed);
app.post('/craigslist/toggle_post/:id', api.craigslist.toggleCraigslistShowHide);
app.get('/craigslist/jobs', api.craigslist.getCraigslistJobs);
app.get('/craigslist_scraper', api.craigslist_scraper.getCraigslistScrapper);
app.get('/glassdoor/jobs', api.glassdoor.getGlassdoorJobs);
// app.get('/indeed/jobs', api.indeed.getIndeedJobs);
app.get('/links', api.links.getLinksFromDb);
app.post('/links', api.links.postLinksToDb);

// TODO: implement .route
app.get('/reddit/new', api.reddit.getNewPosts);
app.get('/reddit', api.reddit.getSavedPosts);
app.get('/reddit/save', api.reddit.getAndSaveToDatabase);

app.listen(PORT, (err) => {
  if (err) { return console.log('failure at app.listen in server/index =>', err); }
  console.log(`server is listening on ${PORT}`);
});

module.exports = app;
