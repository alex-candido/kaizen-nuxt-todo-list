import { Prisma } from "@prisma/client";

export class Users {
  declare UserModel;

  constructor(userModel: Prisma.UserDelegate< Prisma.RejectOnNotFound | Prisma.RejectPerOperation >) {
    this.UserModel = userModel;
  }

  // Hash passwords
  // Create a token
  add() {}

  // Check credentials
  // Create a token
  login() {}
}