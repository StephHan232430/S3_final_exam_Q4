const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const generateUrlCode = require('./generate_url_code')
const Url = require('./models/url')
const port = 3000

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
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
  res.render('index')
})

app.post('/', (req, res) => {
  const url = req.body.url
  const urlCode = 'https://url-shortener-mongoose.herokuapp.com/' + generateUrlCode(url)
  const urlRecord = new Url({
    url: url,
    url_code: urlCode
  })

  urlRecord.save(err => {
    if (err) return console.log(err)
    res.render('index', { url, urlCode })
  })
})

app.get('/:code', (req, res) => {
  Url.findOne({ url_code: req.params.code }, (err, url) => {
    if (err) return console.log(err)
    return res.redirect(`${url.url}`)
  })
})

app.listen(process.env.PORT || port, () => {
  console.log(`App is running on ${port}`)
})