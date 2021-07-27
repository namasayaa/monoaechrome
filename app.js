const express = require('express')
const app = express()
const port = 3000

require('./utils/db')
const order = require('./models/Order')

const expressLayout = require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.use(expressLayout)
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index', {layout: 'layouts/main-layout'})
})

app.get('/cart', (req, res) => {
    res.render('cart', {layout: false})
})

app.post('/cart', (req, res) => {
    const front_name = req.body.front_name
    const family_name = req.body.family_name
    const email = req.body.email
    const address = req.body.address
    const address2 = req.body.address2
    const country = req.body.country
    const city = req.body.city
    const zip_code = req.body.zip_code
    const item = req.body.item
    const size = req.body.size
    const color = req.body.color
    const total_item = req.body.total_item

    const newOrder = order({
        front_name, family_name, email, address, address2, country, city, zip_code, item, size, color, total_item
    })

    newOrder.save().then(() => res.redirect('/'))
})

app.get('/contact', (req, res) => {
    res.render('contact', {layout :  'layouts/product-layout'})
})

app.get('/product', (req, res) => {
    res.render('product', {layout :  'layouts/product-layout'})
})

app.get('/product-details', (req, res) => {
    res.render('product-details', {layout :  'layouts/product-layout'})
})

app.get('/product-details1', (req, res) => {
    res.render('product-details1', {layout :  'layouts/product-layout'})
})

app.get('/product-details2', (req, res) => {
    res.render('product-details2', {layout :  'layouts/product-layout'})
})

app.get('/product-details3', (req, res) => {
    res.render('product-details3', {layout :  'layouts/product-layout'})
})

app.get('/product-details4', (req, res) => {
    res.render('product-details4', {layout :  'layouts/product-layout'})
})

app.get('/product-details5', (req, res) => {
    res.render('product-details5', {layout :  'layouts/product-layout'})
})

app.get('/product-details6', (req, res) => {
    res.render('product-details6', {layout :  'layouts/product-layout'})
})

app.get('/product-details7', (req, res) => {
    res.render('product-details7', {layout :  'layouts/product-layout'})
})

app.get('/product-details8', (req, res) => {
    res.render('product-details8', {layout :  'layouts/product-layout'})
})

app.get('/product-details9', (req, res) => {
    res.render('product-details9', {layout :  'layouts/product-layout'})
})

app.get('/product-details10', (req, res) => {
    res.render('product-details10', {layout :  'layouts/product-layout'})
})

app.get('/product-details11', (req, res) => {
    res.render('product-details11', {layout :  'layouts/product-layout'})
})

app.listen(port, () => {
    console.log(`Server is Running at http://localhost:${port}`)
})