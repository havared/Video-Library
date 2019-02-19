const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    website_url: { type: String, required: true },
    videos: [String]
  },
  {
    timestamps: { createdAt: "created", updatedAt: "updated" }
  }
);

module.exports = { schema };
