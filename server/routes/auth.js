const express = require('express');

const {signup, login } = require('../controllers/auth.js')
const router = express.Router()

router.post('./signup');
router.post('./login')