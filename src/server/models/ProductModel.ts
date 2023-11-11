import { Document, Schema, model, models } from "mongoose";

export interface ProductType extends Document {
  name: string;
  description: string;
  image?: string;
  price?: number;
  stock?: number;
  color?: string;
  size?: string;
  isActive: boolean;
}

const ProductSchema = new Schema<ProductType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
    },

    size: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const ProductModel = models.Product || model("Product", ProductSchema);

export default ProductModel;
