const Product = require('../models/Product')

module.exports = class ProductController{
    static async HomePage(req,res){
        res.render('products/home')
    }
    static CreateProduct(req,res){
        res.render('products/create')
    }
}