const get = ({ Video }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const video = await Video.findOne({ _id });
    if(video) res.status(200).send({ video });
    else res.status(200).send({ message: 'Not found' });
  } catch (error) {
    next(error);
  }
};


module.exports= { get };
