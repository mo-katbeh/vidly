const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/vidly.com', (req, res)=>{
    console.log('Welcome to your website ^_^ ');
});

module.exports = router;