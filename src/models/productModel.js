const mongoose = require("mongoose")


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
    },

    currencyId: {
        type: String,
        required: true,
        default: 'INR'
    },

    currencyFormat: {
        type: String,
        required: true,
        default: '₹'
    },

    isFreeShipping: {
        type: Boolean,
        default: false,
    },

    productImage: {
        type: String,
        required: true
    },

    style: {
        type: String,

    },

    availableSizes: {
        type: String,
        enum: ["S", "XS", "M", "L", "XXL", "XL"]
    },
    installments: {
        type: Number,
        default: 0,

    },
    isDeleted: {
        type: Boolean,
        default: false
    },

    deletedAt: {
        type: Date,
        default:null
        
    },



}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)