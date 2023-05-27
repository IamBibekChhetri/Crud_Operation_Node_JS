// routes.js

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Create a new user
router.post('/users', UserController.createUser);

// Read all users
router.get('/users', UserController.getAllUsers);

// Update a user
router.put('/users/:id', UserController.updateUser);

// Delete a user
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
