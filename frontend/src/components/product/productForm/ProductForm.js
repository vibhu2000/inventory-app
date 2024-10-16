// Add Product Form

import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Product Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No image set for this poduct.</p>
            )}
          </Card>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />
          
          <label>Product Name(soot):</label>
          <input
            type="text"
            placeholder="Product name(soot)"
            name="name_soot"
            value={product?.name_soot}
            onChange={handleInputChange}
          />

          <label>Product Mark:</label>
          <input
            type="text"
            placeholder="Product Mark"
            name="mark"
            value={product?.mark}
            onChange={handleInputChange}
          />

          <label>Product Cost Price:</label>
          <input
            type="text"
            placeholder="Product Cost Price"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Product Selling Price:</label>
          <input
            type="text"
            placeholder="Product Price"
            name="selling_price"
            value={product?.selling_price}
            onChange={handleInputChange}
          />

          <label>Product Quantity:</label>
          <input
            type="text"
            placeholder="Product Quantity"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Product Location:</label>
          <input
            type="text"
            placeholder="Product Location"
            name="location"
            value={product?.location}
            onChange={handleInputChange}
          />
          
          <label>Product Polish:</label>
          <input
            type="text"
            placeholder="Product Polish"
            name="polish"
            value={product?.polish}
            onChange={handleInputChange}
          />
          
          <label>Product Open/Packed:</label>
          <input
            type="text"
            placeholder="Product Open/Pack"
            name="open_pack"
            value={product?.open_pack}
            onChange={handleInputChange}
          />

          <label>Product Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
