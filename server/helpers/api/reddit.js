const Snoowrap = require('snoowrap');
const fs = require('../fs');
const path = require('path');
require('dotenv').config();

// const redditAllUpvotedPosts = require('../../../database/redditAllUpvotedPosts.js');

const getSavedPosts = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send('you hit the right path');
  // res.send(redditAllUpvotedPosts.slice(0, 2000));
};

const getNewPosts = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const r = new Snoowrap({
    userAgent: req.headers['user-agent'],
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });
  r.getMe().getUpvotedContent().fetchAll()
    .then((response) => {
      res.send(response);
    });
};

const getAndSaveToDatabase = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const r = new Snoowrap({
    userAgent: req.headers['user-agent'],
    clientId: process.env.REDDIT_CLIENT_ID,
    clientSecret: process.env.REDDIT_CLIENT_SECRET,
    refreshToken: process.env.REDDIT_REFRESH_TOKEN,
  });
  r.getMe().getUpvotedContent().fetchAll()
    .then((response) => {
      fs.writeDummyData(response, 'redditAllUpvotedPosts.js', true);
    });
};

module.exports = { getNewPosts, getSavedPosts, getAndSaveToDatabase };
