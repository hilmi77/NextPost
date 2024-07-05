"use client";

import { useFormState } from "react-dom";
import FormSubmit from "@/components/form-submit";
import { createPost } from "@/lib/actions";

export default function NewPostPage() {
  const [state, formAction] = useFormState(createPost, {});

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {state.errors && state.errors.title && (
            <p className="error">{state.errors.title}</p>
          )}
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
          {state.errors && state.errors.image && (
            <p className="error">{state.errors.image}</p>
          )}
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          {state.errors && state.errors.content && (
            <p className="error">{state.errors.content}</p>
          )}
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
