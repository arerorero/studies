const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

router.post('/login', function(req, res) {
    loginController.loginUsuario(req, res);
});

module.exports = router;
