const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const generateUrlCode = require('./generate_url_code')
const Url = require('./models/url')
const port = 3000
let productionMode = true

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
  productionMode = false
}

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/url-shortener-mongoose', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: true }))

// 設定路由
app.get('/', (req, res) => {
  res.render('index', { productionMode })
})

app.post('/', (req, res) => {
  const url = req.body.url

  Url.findOne({ url: url }).then(record => {
    let urlCode = 'http://localhost:3000/'
    if (productionMode) {
      urlCode = 'https://stark-eyrie-57663.herokuapp.com/'
    }
    if (!record) {
      urlCode += generateUrlCode(url)
      const urlRecord = new Url({
        url: url,
        url_code: urlCode
      })

      urlRecord.save(err => {
        if (err) return console.log(err)
      })
    } else {
      urlCode = record.url_code
    }
    res.render('index', { url, urlCode, productionMode })
  })
})

app.get('/:code', (req, res) => {
  let copiedLink = 'http://localhost:3000/'
  if (productionMode) {
    copiedLink = 'https://stark-eyrie-57663.herokuapp.com/'
  }
  copiedLink += req.params.code
  Url.findOne({ url_code: copiedLink }, (err, urlRecord) => {
    if (err) return console.log(err)
    res.redirect(`${urlRecord.url}`)
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`App is running on ${port}`)
})