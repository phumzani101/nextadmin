"use server";

import mongodbConnect from "@/lib/mongodbConnect";
import UserModel from "../models/UserModel";
import { FilterQuery } from "mongoose";

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
