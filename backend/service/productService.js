const Product = require('../models/productModel');

// Ottenere tutti i prodotti con filtri, paginazione e ordinamento
const getProducts = async (queryParams) => {
  const pageSize = Number(queryParams.pageSize) || 12;
  const page = Number(queryParams.page) || 1;
  
  const keyword = queryParams.keyword
    ? { name: { $regex: queryParams.keyword, $options: 'i' } }
    : {};
    
  const category = queryParams.category ? { category: queryParams.category } : {};
  const sortOrder = queryParams.sortOrder || 'newest';
  
  let sortOptions = {};
  if (sortOrder === 'newest') {
    sortOptions = { createdAt: -1 };
  } else if (sortOrder === 'priceAsc') {
    sortOptions = { price: 1 };
  } else if (sortOrder === 'priceDesc') {
    sortOptions = { price: -1 };
  }
  
  const count = await Product.countDocuments({ ...keyword, ...category });
  const products = await Product.find({ ...keyword, ...category })
    .populate('category', 'name')
    .sort(sortOptions)
    .limit(pageSize)
    .skip(pageSize * (page - 1));
    
  return {
    products,
    page,
    pages: Math.ceil(count / pageSize),
    totalProducts: count
  };
};

// Ottenere un prodotto per ID
const getProductById = async (id) => {
  return await Product.findById(id).populate('category', 'name');
};

// Ottenere prodotti per categoria
const getProductsByCategory = async (categoryId) => {
  return await Product.find({ category: categoryId }).populate('category', 'name');
};

// Creare un nuovo prodotto
const createProduct = async (productData) => {
  const newProduct = new Product(productData);
  return await newProduct.save();
};

// Aggiornare un prodotto
const updateProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(
    id,
    productData,
    { new: true, runValidators: true }
  ).populate('category', 'name');
};

// Eliminare un prodotto
const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  getProducts,
  getProductById,
  getProductsByCategory,
  createProduct,
  updateProduct,
  deleteProduct
};