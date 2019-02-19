const { Router: router } = require('express');

const { get } = require('./get');
const { create } = require('./create');
const { remove } = require('./remove');

module.exports = (models, { config }) => {
  const api = router();

  api.get('/:_id', get(models, { config }));
  api.post('/', create(models, { config }));
  api.delete('/:_id', remove(models, { config }));

  return api;
};
