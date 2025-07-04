const categoryService = require('../services/categoryService');

// Ottenere tutte le categorie
const getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ottenere una categoria per ID
const getCategoryById = async (req, res) => {
  try {
    const category = await categoryService.getCategoryById(req.params.id);
    
    if (!category) {
      res.status(404).json({ message: 'Categoria non trovata' });
      return;
    }
    
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Creare una nuova categoria
const createCategory = async (req, res) => {
  try {
    const newCategory = await categoryService.createCategory(req.body);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Aggiornare una categoria
const updateCategory = async (req, res) => {
  try {
    const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
    
    if (!updatedCategory) {
      res.status(404).json({ message: 'Categoria non trovata' });
      return;
    }
    
    res.json(updatedCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminare una categoria
const deleteCategory = async (req, res) => {
  try {
    const deletedCategory = await categoryService.deleteCategory(req.params.id);
    
    if (!deletedCategory) {
      res.status(404).json({ message: 'Categoria non trovata' });
      return;
    }
    
    res.json({ message: 'Categoria rimossa con successo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};