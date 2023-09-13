const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const product = require('./models/product');
const methodOverride = require('method-override');


mongoose.connect('mongodb://127.0.0.1:27017/GLA-DB')
  .then(() => console.log('DB connected'))
  .catch((err) => console.log(err));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.send('working fine!!');
});

app.get('/products', async (req, res) => {
  try {
    const products = await product.find({});
    res.render('products/index', { products });
  } catch (error) {
    res.send(error);
  }
});

app.get('/products/:id/edit', async (req, res) => {
  const { id } = req.params;
  try {
    const foundProduct = await product.findById(id);
    if (!foundProduct) {
      return res.status(404).send('Product not found');
    }
    res.render('products/edit', { product: foundProduct });
  } catch (error) {
    res.send(error);
  }
});




app.get('/products/new', (req, res) => {
  res.render('products/new');
});

// app.get('/products/show', (req, res) => {
//   res.render('products/show');
// });
// app.post('/products', async (req, res) => {
//   const { name, image, price, description } = req.body;

//   // Add some validation to check if the required properties exist
//   if (!name || !image || !price || !description) {
//     return res.status(400).send('Missing required fields');
//   }

//   try {
//     await product.create({ name, image, price, description });
//     res.redirect('/products');
//   } catch (error) {
//     res.status(500).send('Error creating product: ' + error.message);
//   }
// });


app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const foundProduct = await product.findById(id);
    res.render('products/show', { product: foundProduct });
  } catch (error) {
    res.send(error);
  }
});

app.patch('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, image, price, description } = req.body;
  try {
    const foundProduct = await product.findById(id);
    if (!foundProduct) {
      return res.status(404).send('Product not found');
    }

    foundProduct.name = name;
    foundProduct.price = price;
    foundProduct.image = image;
    foundProduct.description = description;

    await foundProduct.save();
    res.redirect('/products');
  } catch (error) {
    res.send(error);
  }
});




app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await product.findByIdAndDelete(id);
      res.redirect('/products');
    } catch (error) {
      // If an error occurs during the deletion process, handle it gracefully
      res.status(500).send('Error deleting product: ' + error.message);
    }
  });
  

  app.post('/products', async (req, res) => {
    const { name, image, price, description } = req.body;
  
    // Add some validation to check if the required properties exist
    if (!name || !image || !price || !description) {
      return res.status(400).send('Missing required fields');
    }
  
    try {
      await product.create({ name, image, price, description });
      res.redirect('/products');
    } catch (error) {
      res.status(500).send('Error creating product: ' + error.message);
    }
  });
  




const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server is up at port', PORT);
});
