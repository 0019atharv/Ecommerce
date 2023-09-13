const mongoose = require('mongoose');
const product = require('./models/product');

mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
    .then(() => console.log('DB connected'))
    .catch((err) => console.log(err));


const dummyproducts = [
    {
        name:'Iphone 14',
        image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-iphone-14-pro-202303_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1677311461271',
        price:200,
        description:'The iPhone 14 looks identical to the iPhone 13, but there a new 6.7-inch model called the iPhone 14 Plus. '
    },
    {
        name:'Macbook Pro',
        image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-macbook-air-202306?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1683844828182',
        price:1000,
        description:'M2 is the next generation of Apple silicon. Its 8-core CPU lets you zip through everyday tasks .'
    },
    {
        name:'Apple AirPods ',
        image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73?wid=200&hei=200&fmt=jpeg&qlt=95&.v=1632861342000',
        price:100,
        description:'Apple AirPods (3rd Generation) with MagSafe Charging Case'
    },
    {
        name:'iPad',
        image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-ipad-202210?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1667423432053',
        price:250,
        description:'10.9-inch iPad Wi‑Fi 64GB - Blue'
    },
    {
        name:'Apple Watch',
        image:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-watch-ultra-202209_GEO_IN?wid=400&hei=500&fmt=p-jpg&qlt=95&.v=1661382550267',
        price:500,
        description:'Apple Watch Series 7 orders start Friday, October 8 - Apple (UK)   '
    }
];

async function seedData(){
    await User.deleteMany({});
    await product.create(dummyproducts);
    console.log('DB Seeded successfully!');
}

seedData();