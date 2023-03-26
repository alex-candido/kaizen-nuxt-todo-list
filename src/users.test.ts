import { PrismaClient } from "@prisma/client";
import { describe, expect, test } from "vitest";
import { Users } from "./users";

const client = new PrismaClient()

describe("Users", () => {
  test("is a Users instance", () => {
    const users = new Users(client.user);
    expect(users).toBeInstanceOf(Users);
  })
})