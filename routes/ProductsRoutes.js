const express = require('express')
const router = express.Router()
const ProductController = require('../controller/ProductController')

router.get('/', ProductController.HomePage)
router.get('/create', ProductController.CreateProduct)
router.post('/add', ProductController.AddProduct)
router.get('/product/:id', ProductController.OneProduct)
router.get('/edit/:id', ProductController.EditProduct)
router.post('/update', ProductController.UpdateProduct)

module.exports= router