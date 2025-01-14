const Product = require('../models/Product')

module.exports = class ProductController{
    static async HomePage(req,res){
        res.render('products/home')
    }
    static CreateProduct(req,res){
        res.render('products/create')
    }
    static async AddProduct(req,res){
        const {name,price,amount,description} = req.body

        const product = new Product({name,price,amount,description})

        await product.save()

        res.redirect('/')
    }
}