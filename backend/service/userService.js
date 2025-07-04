const User = require('../models/userModel');

// Ottenere tutti gli utenti
const getUsers = async () => {
  return await User.find({}).select('-password');
};

// Ottenere un utente per ID
const getUserById = async (id) => {
  return await User.findById(id).select('-password');
};

// Ottenere un utente per email
const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Creare un nuovo utente
const createUser = async (userData) => {
  const newUser = new User(userData);
  return await newUser.save();
};

// Aggiornare un utente
const updateUser = async (id, userData) => {
  const user = await User.findById(id);
  
  if (!user) {
    return null;
  }
  
  // Aggiorna i campi
  Object.keys(userData).forEach(key => {
    user[key] = userData[key];
  });
  
  return await user.save();
};

// Eliminare un utente
const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  getUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser
};