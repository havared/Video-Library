const _ = require('lodash');

const remove = ({ Video }, { config }) => async (req, res, next) => {
  const { _id } = req.params;
  try {
    const video = await Video.findOne({ _id });
    await Video.remove({ _id });
    res.status(200).send({ video });
  } catch (error) {
    next(error);
  }
};

module.exports= { remove };
