import mongodbConnect from "../src/lib/mongodbConnect";
import UserModel from "../src/server/models/UserModel";
import { faker } from "@faker-js/faker";

const userFaker = async () => {
  await mongodbConnect();
  for (var i = 0; i < 10; i++) {
    var user = new UserModel({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      image: faker.image.avatar(),
      password: "majorars",
    });
    await user.save();
  }
};

userFaker();
