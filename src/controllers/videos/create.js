const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Video }, { config }) => async (req, res, next) => {
  try {
    const video = new Video();
    if (!req.body.title || !req.body.url) {
      throw new NotAcceptable(405, 'Title and video url should be provided');
    }
    _.extend(video, req.body);
    await video.save();

    return sendOne(res, { video });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
