"use server";
import { storePost } from "@/lib/posts";
import { redirect } from "next/navigation";
import { uploadImage } from "./cloudinary";

async function createPost(prevState, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  console.log(title, image, content);

  let errors = [];

  // Check for title
  if (!title || title.trim().length === 0) {
    errors.push("Title is required");
  }

  // Check for content
  if (!content || content.trim().length === 0) {
    errors.push("Content is required");
  }

  // Check for image
  if (!image || image.size === 0) {
    errors.push("Image is required");
  }

  // Return errors if any exist
  if (errors.length > 0) {
    // Return an object with the errors array
    return { errors };
  }

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error("Failed to upload image");
  }

  // Store the post if there are no errors
  await storePost({
    imageUrl: imageUrl, // You might need to handle the image URL properly here
    title,
    content,
    userId: 1,
  });

  // Redirect to feed
  redirect("/feed");
}

export { createPost };
