const mongoose = require('mongoose')
const {Schema} = mongoose

const Product = mongoose.model('Product', new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:0
    },
    amount:{
        type:Number,
        required:true,
        min:0
    },
    description:{
        type:String,
        required:true,
    }
}))
module.exports = Product