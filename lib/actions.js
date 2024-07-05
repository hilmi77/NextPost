"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";

async function createPost(formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  console.log(title, image, content);

  let errors = [];

  if (!title || title.trim().length === 0) {
    return errors.push("Title is required");
  }

  if (!content || content.trim().length === 0) {
    return errors.push("Content is required");
  }

  if (!image) {
    return errors.push("Image is required");
  }

  if (errors.length > 0) {
    return { errors };
  }

  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}

export { createPost };
