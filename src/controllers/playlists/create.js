const { NotAcceptable } = require('rest-api-errors');
const { sendOne } = require('../../middleware');
const _ = require('lodash');

const create = ({ Playlist, Video }, { config }) => async (req, res, next) => {
  try {
    const playlist = new Playlist();
    if (!req.body.name || !req.body.website_url || !req.body.videos) {
      throw new NotAcceptable(405, 'Name, website url, videos should be provided');
    }
    // to check if videos exists
    const video_list = await Video.find({_id: { $in: [req.body.videos]}})
    if(video_list.length > 0){
      let video_ids = [];
      video_list.map((each_video, key) => {
        video_ids.push(each_video._id)
      })
      _.extend(playlist, req.body, {videos: video_ids});
      await playlist.save();
      return sendOne(res, { video });
    }else{
      throw new NotAcceptable(405, 'Not valid video list');
    }

    return sendOne(res, { playlist });
  } catch (error) {
    next(error);
  }
};

module.exports= { create };
