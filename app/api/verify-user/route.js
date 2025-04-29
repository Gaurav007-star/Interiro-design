import { db } from "@/config/db";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";

import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const { user } = await req.json();

    // check that user already exists or not
    const userExists = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, user.primaryEmailAddress.emailAddress));

    if (userExists.length == 0) {
      // insert user if user is not register
      const createUser = await db
        .insert(usersTable)
        .values({
          name: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          imageUrl: user.imageUrl
        })
        .returning({ usersTable });

      return NextResponse.json({
        success: true,
        msg: "User login successfully",
        user: createUser[0].usersTable

      });

    }

    return NextResponse.json({
      success: true,
      user: userExists[0]
    });


  } catch (error) {
    const errMessage = error.message;
    return NextResponse.json({
      success: false,
      err: errMessage
    });
  }
}
