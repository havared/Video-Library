const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true },
    thumbnail_url: { type: String },
    url: { type: String, required: true },
    duration: { type: Number }
  },
  {
    timestamps: { createdAt: "created", updatedAt: "updated" }
  }
);

module.exports = { schema };
