"use server";

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "../utils";

// const {
//   APPWRITE_DATABASE_ID: DATABASE_ID,
//   APPWRITE_USER_COLLECTION_ID: USER_COLLECTION_ID,
//   APPWRITE_BANK_COLLECTION_ID: BANK_COLLECTION_ID,
// } = process.env;

// export const getUserInfo = async ({ userId }: getUserInfoProps) => {
//   try {
//     const { database } = await createAdminClient();

//     const user = await database.listDocuments(
//       DATABASE_ID!,
//       USER_COLLECTION_ID!,
//       [Query.equal("userId", [userId])]
//     );

//     return parseStringify(user.documents[0]);
//   } catch (error) {
//     console.log(error);
//   }
// };

export const signIn = async ({ email, password }: signInProps) => {
  try {
    const { account } = await createAdminClient();
    const res = await account.createEmailPasswordSession(email, password);
    return parseStringify(res);
  } catch (error) {
    console.log("SIGNIN_ERROR", error);
  }
};

export const signUp = async (userData: SignUpParams) => {
  const { email, password, firstName, lastName } = userData;
  try {
    const { account } = await createAdminClient();

    const newUserAccount = await account.create(
      ID.unique(),
      email,
      password,
      `${firstName} ${lastName}`
    );
    const session = await account.createEmailPasswordSession(email, password);

    cookies().set("appwrite-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });
    return parseStringify(newUserAccount);
  } catch (error) {
    console.log("SIGNUP_ERROR", error);
  }
};

export async function getLoggedInUser() {
  try {
    const { account } = await createSessionClient();
    return await account.get();
  } catch (error) {
    return null;
  }
}

export const logout = async () => {
  try {
    const { account } = await createSessionClient();
    cookies().delete("appwrite-session");
    await account.deleteSession("current");
  } catch (error) {
    return null;
  }
};
