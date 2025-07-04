const Category = require('../models/categoryModel');

// Ottenere tutte le categorie
const getCategories = async () => {
  return await Category.find({}).sort({ name: 1 });
};

// Ottenere una categoria per ID
const getCategoryById = async (id) => {
  return await Category.findById(id);
};

// Creare una nuova categoria
const createCategory = async (categoryData) => {
  const newCategory = new Category(categoryData);
  return await newCategory.save();
};

// Aggiornare una categoria
const updateCategory = async (id, categoryData) => {
  return await Category.findByIdAndUpdate(
    id,
    categoryData,
    { new: true, runValidators: true }
  );
};

// Eliminare una categoria
const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};