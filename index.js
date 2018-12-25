const convert = (model) => {
  const modelSchema = model.options.columns
  let schema = {
    type: 'object',
    properties: {}
  }
  for (let item in modelSchema) {
    const prop = schema['properties']
    prop[item] = {
      type: modelSchema[item].type.name.toLocaleLowerCase()
    }
  }
  return schema
}

module.exports = convert
