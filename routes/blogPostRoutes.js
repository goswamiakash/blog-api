const express = require('express');
const router = express.Router();
const BlogPost = require('../models/blogPost');



// Create a blog post
router.post('/', async (req, res) => {
  try {
    const blogPost = await BlogPost.create(req.body);
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const blogPosts = await BlogPost.find();
    res.json(blogPosts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a single blog post by ID
router.get('/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a blog post by ID
router.put('/:id', async (req, res) => {
  try {
    const blogPost = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(blogPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a blog post by ID
router.delete('/:id', async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
