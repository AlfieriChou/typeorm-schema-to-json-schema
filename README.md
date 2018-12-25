# typeorm-schema-to-json-schema

[![NPM version][npm-image]][npm-url]
[![license][license-image]][license-url]

[![standard][standard-image]][standard-url]

Typeorm entitySchema to json schema.

### Install

```
npm install typeorm-schema-to-json-schema
```

### Get started

* cat.js

    ```javascript
    const { EntitySchema } = require('typeorm')

    const Cat = new EntitySchema({
    name: 'cats',
    columns: {
        id: {
        type: Number,
        primary: true,
        generated: true
        },
        name: {
        type: String
        }
    }
    })

    module.exports = Cat
    ```

* convert.js
    ```javascript
    const convert = require('typeorm-schema-to-json-schema')
    const Cat = require('./cat')

    const schema = convert(Cat)
    console.log('------>', schema)

    // ------->, {
    //      type: 'object',
    //      properties: {
    //          id: { type: 'number' },
    //          name: { type: 'string' }
    //      }
    // }
    ```


[npm-image]: https://badge.fury.io/js/typeorm-schema-to-json-schema.svg
[npm-url]: https://npmjs.org/package/typeorm-schema-to-json-schema
[license-image]: https://img.shields.io/badge/License-MIT-yellow.svg
[license-url]: https://opensource.org/licenses/MIT
[standard-image]:
https://cdn.rawgit.com/standard/standard/master/badge.svg
[standard-url]:
https://github.com/standard/standard
