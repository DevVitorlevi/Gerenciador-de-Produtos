const Product = require('../models/Product')

module.exports = class ProductController{
    static async HomePage(req,res){
        const products = await Product.find().lean()
        res.render('products/home',{products})
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
    static async OneProduct(req,res){
        const id = req.params.id

        const product = await Product.findOne({_id:id}).lean()

        res.render('products/product', {product} )
    }
    static async EditProduct(req,res){
        const id = req.params.id

        const product = await Product.findById(id).lean()

        res.render('products/edit', {product})
        
    }
    static async UpdateProduct(req,res){
        
        const {id,name,price,amount,description}= req.body
        const Data = {name,price,amount,description}

        await Product.updateOne({_id:id}, Data)

        res.redirect('/')
    }
}