"use server";

import prisma from "@/config/db/prisma";

export async function addUserNameEmailToWaitlist(name: string, email: string) {
  try {
    const result = await prisma.waitlist.upsert({
      where: { email },
      update: {
        name,
        updatedAt: new Date(),
      },
      create: {
        name,
        email,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });

    // Determine whether it was an insert or an update
    const actionType = result.createdAt.getTime() === result.updatedAt.getTime() ? "added" : "updated";

    return {
      actionType,
      entry: result,
      success: true,
    };
  } catch (error) {
    return { success: false, error, actionType: "error" };
  }
}
