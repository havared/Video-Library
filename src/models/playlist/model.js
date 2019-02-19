const mongoose = require('mongoose');
const { schema } = require('./schema');
const Playlist = mongoose.model('Playlist', schema);


module.exports = { Playlist };
