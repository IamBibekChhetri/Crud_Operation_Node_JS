const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
});

const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({
  name: 'John Doe',
  age: 25,
  email: 'john.doe@example.com',
});

// Save the new user to the database
newUser.save()
  .then(() => {
    console.log('User saved successfully');
  })
  .catch((error) => {
    console.error('Error saving user:', error);
  });

  