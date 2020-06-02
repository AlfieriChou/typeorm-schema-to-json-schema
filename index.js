const convert = (model) => {
  const columns = model.options.columns || {}
  return Object.entries(columns).reduce((jsonSchema, [key, value]) => {
    return {
      type: jsonSchema.type,
      properties: {
        ...jsonSchema.properties,
        [key]: {
          ...value,
          type: value.type.name.toLocaleLowerCase()
        }
      }
    }
  }, {
    type: 'object',
    properties: {}
  })
}

module.exports = convert
