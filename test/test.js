const Cat = require('./cat')
const convert = require('../index')
const describe = require('mocha').describe
const it = require('mocha').it
require('should')

const schema = convert(Cat)

describe('test typeorm schema to json schema!!!', () => {
  it('schema mast have type perproty!!', () => {
    schema.should.hasOwnProperty('type')
  })
  it('schema mast have properties perproty!!', () => {
    schema.should.hasOwnProperty('properties')
  })
  it('schema type match object!!', () => {
    schema['type'].should.match('object')
  })
  it('schema properties is object!!', () => {
    schema['properties'].should.be.Object()
  })
})
