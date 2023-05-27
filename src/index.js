// app.js or index.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

const mongoose = require('mongoose');

app.use(bodyParser.json());
// app.use('/api', routes);

//routes ma vako main file ko routes tanne
app.use("/", routes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



// Connect to MongoDB
mongoose.connect('mongodb://localhost/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Define and use your schemas and models here
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
  
  