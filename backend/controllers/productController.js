const Product = require('../models/product');

const ErrorHandler = require('../utils/errorHandlers')

// add new record
exports.newProduct = async(req, res, next) => {
    const product = await Product.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}
// fetch all records
exports.getProducts = async(req, res, next) =>{
    const products = await Product.find();
    res.status(200).json({
        success:true,
        count:products.length,
        products
    })
}

// fetch single record by id

exports.getSingleProduct = async(req, res, next) =>{
    // debugger
   
    const product = await Product.findById(req.params.id);

    if(!product){
        return next(new ErrorHandler('Product not found', 404))
    }
    res.status(200).json({
        success:true,
        product
    })
}

//update product by ID
exports.updateProduct = async(req, res, next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success:false,
            message:`Product not found`
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    })

    res.status(200).json({
        success:true,
        product
    })
}

// Delete product by id

exports.deleteProduct = async(req, res, next) =>{
    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(404).json({
            success:false,
            message:`Product not found`
        })
    }

    await Product.remove();

    res.status(200).json({
        success:true,
        message:"Product is deleted."
    })
}