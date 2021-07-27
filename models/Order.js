const mongoose = require('mongoose')


const orderSchema = new mongoose.Schema({
    front_name : String,
    family_name : String,
    email : String,
    address : String,
    address2 : String,
    country : String,
    city : String,
    zip_code : String,
    item : String,
    size : String,
    color : String,
    total_item : Number
})

const order = mongoose.model('order', orderSchema)

module.exports = order