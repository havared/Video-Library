const _ = require('lodash');

const remove = ({ Playlist }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const playlist = await Playlist.findOne({ _id });
    await Playlist.remove({ _id });
    res.status(200).send({ playlist });
  } catch (error) {
    next(error);
  }
};

module.exports= { remove };
