const mongoose = require('mongoose');
const { schema } = require('./schema');
const Video = mongoose.model('Video', schema);


module.exports = { Video };
