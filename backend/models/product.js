const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
     name:{
         type:String,
         required:[false, 'Please enter product name'],
         trim:true,
         maxLength:[100,'Product name cannot exceed 100 characters']
     },
     price:{
        type:Number,
        required:[true, 'Please enter product price'],
        maxLength:[100,'Product name cannot exceed 100 characters'],
        default:0.0
    },
    description:{
        type:String,
        required:[false, 'Please enter product description']
        
    },
    rating:{
        type:Number,
        default:0
    },
    images:[
        {
            public_id:{
                type:String,
                required:true
            },
            url:{
                type:String,
                required:true
            }
        }
    ],
    category:{
        type:String,
        required:[false,'Please select category for this product'],
        enum: {
            values:[
                'Electronics',
                'Camera',
                'Laptop',
                'Accessories',
                'Headphone',
                'Food',
                'Books'
            ],
            message:"Please select correct category for product"
        }
    },
    seller:{
        type:String,
        required:[false,'Please enter product seller']
    },
    stock:{
        type:Number,
        required:[true,'Please enter product stock'],
        maxLength:[5, 'Product name connot exceed 5 characters'],
        default:0
    },
    numOfReview:{
        type:Number,
        default:0
    },
    review:[
        {
            name:{
                type:String,
                required:true
            },
            rating:{
                type:Number,
                required:true
            },
            comment:{
                type:Number,
                required:true
            }
        }
    ],
    createdAT:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('Product', productSchema);