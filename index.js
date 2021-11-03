const fastifyPlugin = require('fastify-plugin');
const knex = require('knex');
const bookshelf = require('bookshelf');

module.exports = fastifyPlugin(
  async (fastify, opts, next) => {
    const handler = bookshelf(knex(opts));
    fastify.decorate('bookshelf', handler);
    await handler.knex.raw(`select 'I have ${opts.connection.database}' as status`);
  },
  { fastify: '3.x' },
);
