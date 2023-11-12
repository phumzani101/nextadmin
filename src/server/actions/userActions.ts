"use server";

import mongodbConnect from "@/lib/mongodbConnect";
import UserModel from "../models/UserModel";
import { FilterQuery } from "mongoose";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const listUsers = async (params: any) => {
  const { searchQuery } = params;

  const query: FilterQuery<typeof UserModel> = {};

  if (searchQuery) {
    query.$or = [
      { name: { $regex: new RegExp(searchQuery, "i") } },
      { email: { $regex: new RegExp(searchQuery, "i") } },
    ];
  }

  try {
    await mongodbConnect();
    const users = await UserModel.find(query);
    return users;
  } catch (error: any) {
    console.log("USER_LIST_ERROR", error);
    throw new Error(error.message);
  }
};

export const getUserById = async (params: any) => {
  const { userId } = params;

  try {
    await mongodbConnect();
    const user = await UserModel.findById(userId);
    return JSON.parse(JSON.stringify(user));
  } catch (error: any) {
    console.log("USER_GET_ERROR", error);
    throw new Error(error.message);
  }
};

export const createUser = async (formData: any) => {
  const { name, email, password, phone, address, bio, role, isActive } =
    formData;

  try {
    await mongodbConnect();
    let user = await UserModel.findOne({ email });
    if (user) {
      throw new Error("User is already exist");
    }
    user = new UserModel({
      name,
      email,
      phone,
      address,
      password,
      bio,
      role,
      isActive,
    });
    user = await user.save();
    revalidatePath("/dashboard/users");

    return JSON.parse(JSON.stringify(user));
  } catch (error: any) {
    console.log("USER_LIST_ERROR", error);
    throw new Error(error.message || "Failed to create a user");
  }
};

export const updateUser = async (formData: any) => {
  const { userId, name, email, password, phone, address, bio, role, isActive } =
    formData;

  try {
    await mongodbConnect();
    let user = await UserModel.findByIdAndUpdate(
      userId,
      {
        name,
        email,
        phone,
        address,
        password,
        bio,
        role,
        isActive,
      },
      { new: true }
    );
    if (user) {
      throw new Error("User is already exist");
    }
    revalidatePath("/dashboard/users");

    return JSON.parse(JSON.stringify(user));
  } catch (error: any) {
    console.log("USER_LIST_ERROR", error);
    throw new Error(error.message || "Failed to create a user");
  }
};

// delete user
export const deleteUser = async (params: any) => {
  const { userId } = params;

  try {
    await mongodbConnect();
    let user = await UserModel.findByIdAndDelete(userId);
    if (user) {
      throw new Error("User is already exist");
    }
    revalidatePath("/dashboard/users");

    return JSON.parse(JSON.stringify(user));
  } catch (error: any) {
    console.log("USER_LIST_ERROR", error);
    throw new Error(error.message || "Failed to create a user");
  }
};
