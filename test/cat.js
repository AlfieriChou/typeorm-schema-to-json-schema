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
