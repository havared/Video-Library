const express = require('express');

// list of models here
const { Video } = require('../models/video');
const { Playlist } = require('../models/playlist');

const routersInit = config => {
  const router = express();

  return router;
};

module.exports = routersInit;
