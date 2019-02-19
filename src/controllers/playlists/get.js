const get = ({ Playlist }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const playlist = await Playlist.findOne({ _id });
    if(playlist) res.status(200).send({ playlist });
    else res.status(200).send({ message: 'Not found' });
  } catch (error) {
    next(error);
  }
};


module.exports= { get };
