const fastify = require('fastify')();
const tap = require('tap');
const bookshelf = require('..');

fastify.register(bookshelf, {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './test.sqlite',
  },
});

fastify.ready(async (err) => {
  try {
    if (err) tap.fail(err);
    await tap.test('fastify.bookshelf should exist', (test) => {
      test.ok(fastify.bookshelf);
      test.end();
      return Promise.resolve();
    });

    await tap.test('bookshelf.knex should be able to query', async (test) => {
      try {
        await fastify.bookshelf.knex.select(1);
        test.pass('query works');
        test.end();
      } catch (error) {
        test.fail(error);
      }
    });
    tap.end();
  } catch (error) {
    tap.fail(error);
  } finally {
    fastify.bookshelf.knex.destroy(() => fastify.close());
  }
});
