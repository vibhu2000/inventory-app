const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
    },
    name_soot: {
      type: String,
      // required: [true, "Please add a name"],
      trim: true,
    },
    location: {
      type: String,
      // required: [true, "Please add a location"],
      trim: true,
    },
    mark: {
      type: String,
      // required: [true, "Please add a mark"],
      trim: true,
    },
    polish: {
      type: String,
      // required: [true, "Please add a polish"],
      trim: true,
    },
    open_pack: {
      type: String,
      // required: [true, "Please add a Opend/Packed"],
      trim: true,
    },
    sku: {
      type: String,
      required: true,
      default: "SKU",
      trim: true,
    },
    category: {
      type: String,
      // required: [true, "Please add a category"],
      trim: true,
    },
    quantity: {
      type: String,
      // required: [true, "Please add a quantity"],
      trim: true,
    },
    price: {
      type: String,
      // required: [true, "Please add a price"],
      trim: true,
    },
    selling_price: {
      type: String,
      // required: [true, "Please add a price"],
      trim: true,
    },
    description: {
      type: String,
      // required: [true, "Please add a description"],
      trim: true,
    },
    image: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
