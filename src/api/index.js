const express = require('express');
const { errorHandler } = require('../middleware');

// list of models here
const { Video } = require('../models/video');
const { Playlist } = require('../models/playlist');

// list of controllers here
const videos = require('../controllers/videos');
const playlists = require('../controllers/playlists');

// combine models into one object
const models = { Video, Playlist };

const routersInit = config => {
  const router = express();

  // register api points
  router.use('/playlists', playlists(models, { config }));
  router.use('/videos', videos(models, { config }));
  // catch api all errors
  router.use(errorHandler);
  return router;
};

module.exports = routersInit;
