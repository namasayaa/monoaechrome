const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin123:Erian123@cluster0.eyfjp.mongodb.net/Monaechrome', 
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})