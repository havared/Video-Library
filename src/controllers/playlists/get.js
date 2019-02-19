const get = ({ Playlist, Video }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const playlist = await Playlist.findOne({ _id });
    if(playlist){
      const video_list = await Video.find({_id: { $in: playlist.videos}})
      if(video_list) res.status(200).send({videos: video_list});
      else res.status(200).send({ message: 'Not found' });
    }
    else res.status(200).send({ message: 'Not found' });
  } catch (error) {
    next(error);
  }
};


module.exports= { get };
