const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to Elevator Hub API' });
});

module.exports = router;