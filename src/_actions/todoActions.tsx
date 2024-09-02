"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createTodo(formValues: Record<string, any>) {
  try {
    const fullname = formValues.fullname as string;
    const email = formValues.email as string;
    const description = formValues.description as string;

    await prisma.todo.create({
      data: {
        fullname,
        email,
        description,
      },
    });

    revalidatePath("/contact-me");

    return { success: true };
  } catch (error) {
    console.error("Error creating post:", error);
    return { success: false, message: "Failed to create post" };
  }
}

// export async function changeStatus(formValues: Record<string, any>) {
//   try {
//     const inputId = formValues.get("inputId") as string;
//     const todo = await prisma.todo.findUnique({
//       where: {
//         id: inputId,
//       },
//     });

//     const updateStatus = !todo?.isCompleted;

//     await prisma.todo.update({
//       where: {
//         id: inputId,
//       },
//       data: {
//         isCompleted: updateStatus,
//       },
//     });

//     revalidatePath("/");
//     return { success: true };
//   } catch (error) {
//     console.error("Error creating post:", error);
//     return { success: false, message: "Failed to create post" };
//   }
// }

// export async function editTodo(formValues: Record<string, any>) {
//   try {
//     const newFullname = formValues.get("newFullname") as string;
//     const newEmail = formValues.get("newEmail") as string;
//     const newDescription = formValues.get("newDescription") as string;
//     const inputId = formValues.get("inputId") as string;

//     await prisma.todo.update({
//       where: {
//         id: inputId,
//       },
//       data: {
//         fullname: newFullname,
//         email: newEmail,
//         description: newDescription,
//       },
//     });

//     revalidatePath("/");
//     return { success: true };
//   } catch (error) {
//     console.error("Error creating post:", error);
//     return { success: false, message: "Failed to create post" };
//   }
// }

// export async function deleteTodo(formValues: Record<string, any>) {
//   try {
//     const inputId = formValues.get("inputId") as string;

//     await prisma.todo.delete({
//       where: {
//         id: inputId,
//       },
//     });

//     revalidatePath("/");
//     return { success: true };
//   } catch (error) {
//     console.error("Error creating post:", error);
//     return { success: false, message: "Failed to create post" };
//   }
// }
