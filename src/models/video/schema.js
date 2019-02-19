const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const checklist_schema = new Schema({
    name: { type: String, required: true},
    created_by: String,
    deleted: { type: Boolean, default: false},
    archived: { type: Boolean, default: false},
    done: { type: Boolean, default: false},
    acted_by: { type: String, default: null},
  },
  {
    timestamps: { createdAt: "created", updatedAt: "updated" }
  }
);

const message_schema = new Schema({
    body: String,
    type: String,
    from: String,
    to: String,
    author: String,
    deleted: { type: Boolean, default: false},
    archived: { type: Boolean, default: false}
  },
  {
    timestamps: { createdAt: "created", updatedAt: "updated" }
  }
);


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
