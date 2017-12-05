const fastifyPlugin = require('fastify-plugin');
const knex = require('knex');
const bookshelf = require('bookshelf');

module.exports = fastifyPlugin((fastify, opts, next) => {
  try {
    const handler = bookshelf(knex(opts));
    fastify.decorate('bookshelf', handler);
    next();
  } catch (err) {
    next(err);
  }
}, '>=0.30.0');
