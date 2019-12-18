const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-type-url')

const urlSchema = new Schema({
  url: {
    type: mongoose.SchemaTypes.url,
    required: true
  },
  url_code: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Url', urlSchema)