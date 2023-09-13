const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String,
        default:'https://ovantica.com/pub/media/catalog/product/cache/359e51c8e354c4e2b5af98e814f93978/i/p/iphone_11_pro_green_-_iphone_11_pro_-_buy_iphone_11_pro_-_iphone_11_pro_green_-_iphone_11_pro_review_-_iphone_11_pro_price_1_4.jpeg'
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        trim:true
    },
    review:{
        type:String,
        trim:true
    }
});

const product = mongoose.model('product', productSchema);

module.exports = product;