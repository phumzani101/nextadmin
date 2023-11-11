import UserModel from "../UserModel";
import { faker } from "@faker-js/faker";

const userFaker = () => {
  for (var i = 0; i < 10; i++) {
    var user = new UserModel({
      name: faker.internet.userName(),
      email: faker.internet.email(),
      phone: faker.phone.number(),
      image: faker.image.avatar(),
      password: "majorars",
    });
    user.save((err: any, data: any) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

userFaker();
