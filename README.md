# typeorm-schema-to-json-schema
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
    ```
