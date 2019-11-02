const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requester: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },

    limit: {
        type: Date,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model("Product", ProductSchema);