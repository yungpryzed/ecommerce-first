const Product = require('../models/productModel');
const productService = require('../services/productService');

// Ottenere tutti i prodotti
const getProducts = async (req, res) => {
  try {
    const { products, page, pages, totalProducts } = await productService.getProducts(req.query);
    res.json({ products, page, pages, totalProducts });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ottenere un prodotto per ID
const getProductById = async (req, res) => {
  try {
    const product = await productService.getProductById(req.params.id);
    
    if (!product) {
      res.status(404).json({ message: 'Prodotto non trovato' });
      return;
    }
    
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ottenere prodotti per categoria
const getProductsByCategory = async (req, res) => {
  try {
    const products = await productService.getProductsByCategory(req.params.categoryId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Creare un nuovo prodotto
const createProduct = async (req, res) => {
  try {
    const newProduct = await productService.createProduct(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Aggiornare un prodotto
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await productService.updateProduct(req.params.id, req.body);
    
    if (!updatedProduct) {
      res.status(404).json({ message: 'Prodotto non trovato' });
      return;
    }
    
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminare un prodotto
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await productService.deleteProduct(req.params.id);
    
    if (!deletedProduct) {
      res.status(404).json({ message: 'Prodotto non trovato' });
      return;
    }
    
    res.json({ message: 'Prodotto rimosso con successo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
};