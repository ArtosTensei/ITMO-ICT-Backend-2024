import argon2 from "argon2";

export default async (password: string): Promise<string> => {
  console.log(password);
  return await argon2.hash(password);
};
