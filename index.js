const express = require('express');
const mongoose = require('mongoose');
const blogPostRoutes = require('./routes/blogPostRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost/blog-api', { useNewUrlParser: true, useUnifiedTopology: true });

// Use the blogPostRoutes
app.use('/posts', blogPostRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
