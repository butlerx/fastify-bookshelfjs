# Fastify BookshelfJS Plugin

Bookshelf.js is a Javascript ORM built on top of knex.js. This plugin adds a
shared bookshelf object to fastify that can be accessed from anywhere.

## Installation

```
$ yarn add fastify-bookshelfjs

# Then add one of the following:
$ yarn add pg
$ yarn add sqlite3
$ yarn add mysql
$ yarn add mysql2
$ yarn add mariasql
$ yarn add strong-oracle
$ yarn add oracle
$ yarn add mssql
```

## Usage

```javascript
const bookshelf = require('fastify-bookshelfjs');

fastify.register(bookshelf, {
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'myapp_test',
  },
});

fastify.get('/', (request, reply) => {
  console.log(fastify.bookshelf); // bookshelf object
});
```

## Further reading

Bookshelf used knex.js refer to
[knexjs docs](http://knexjs.org/#Installation-client) for connection options.

[Bookshelf Docs](http://bookshelfjs.org/)

## Version

v2.0.0

## License

Licensed under [MIT](./LICENSE).
