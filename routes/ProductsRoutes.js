const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.get('/', ProductController.HomePage)
router.get('/', ProductController.CreateProduct)

module.exports= router