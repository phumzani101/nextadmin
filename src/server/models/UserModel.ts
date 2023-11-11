import { Document, Schema, model, models } from "mongoose";

export interface UserType extends Document {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  image?: string;
  address?: string;
  role: string;
  isActive: boolean;
}

const UserSchema = new Schema<UserType>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const UserModel = models.User || model("User", UserSchema);

export default UserModel;
