const userService = require('../services/userService');
const generateToken = require('../utils/generateToken');

// Autenticare utente e ottenere token
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    
    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(401).json({ message: 'Email o password non validi' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Registrare un nuovo utente
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const userExists = await userService.getUserByEmail(email);
    
    if (userExists) {
      res.status(400).json({ message: 'Utente già esistente' });
      return;
    }
    
    const user = await userService.createUser({
      name,
      email,
      password,
    });
    
    if (user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } else {
      res.status(400).json({ message: 'Dati utente non validi' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ottenere il profilo utente
const getUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user._id);
    
    if (!user) {
      res.status(404).json({ message: 'Utente non trovato' });
      return;
    }
    
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Aggiornare il profilo utente
const updateUserProfile = async (req, res) => {
  try {
    const user = await userService.getUserById(req.user._id);
    
    if (!user) {
      res.status(404).json({ message: 'Utente non trovato' });
      return;
    }
    
    const updatedUser = await userService.updateUser(user._id, {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password || user.password,
    });
    
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ottenere tutti gli utenti (admin)
const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ottenere un utente per ID (admin)
const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    
    if (!user) {
      res.status(404).json({ message: 'Utente non trovato' });
      return;
    }
    
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Aggiornare un utente (admin)
const updateUser = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    
    if (!user) {
      res.status(404).json({ message: 'Utente non trovato' });
      return;
    }
    
    const updatedUser = await userService.updateUser(req.params.id, {
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      isAdmin: req.body.isAdmin !== undefined ? req.body.isAdmin : user.isAdmin,
    });
    
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Eliminare un utente (admin)
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await userService.deleteUser(req.params.id);
    
    if (!deletedUser) {
      res.status(404).json({ message: 'Utente non trovato' });
      return;
    }
    
    res.json({ message: 'Utente rimosso con successo' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
};