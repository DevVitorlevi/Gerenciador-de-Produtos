const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.get('/', ProductController.HomePage)
router.get('/create', ProductController.CreateProduct)

module.exports= router