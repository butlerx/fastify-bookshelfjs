const fastifyPlugin = require('fastify-plugin');
const knex = require('knex');
const bookshelf = require('bookshelf');
const { devDependencies } = require('./package.json');

const minVer = devDependencies.fastify;

module.exports = fastifyPlugin((fastify, opts, next) => {
  try {
    const handler = bookshelf(knex(opts));
    fastify.decorate('bookshelf', handler);
    handler.knex
      .raw(`select 'I have ${opts.connection.database}' as status`)
      .then(() => {
        next();
      })
      .catch(next);
  } catch (err) {
    next(err);
  }
}, minVer);
