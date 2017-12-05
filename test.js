const fastify = require('fastify')();
const tap = require('tap');
const fastifyBookshelfJS = require('.');

tap.test('fastify.bookshelf should exist', test => {
  test.plan(2);

  fastify.register(fastifyBookshelfJS, {
    client: 'sqlite3',
    connection: {
      filename: './test.sqlite',
    },
  });

  fastify.ready(err => {
    test.error(err);
    test.ok(fastify.bookshelf);

    fastify.close(() => test.end());
  });
});
