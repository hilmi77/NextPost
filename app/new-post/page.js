"use client";

import { useFormState } from "react-dom";
import FormSubmit from "@/components/form-submit";
import { createPost } from "@/lib/actions";

export default function NewPostPage() {
  const [state, formAction] = useFormState(createPost, {});

  // Log the errors to see the form state

  console.log(state.errors);

  // const getErrors = (fieldName) => {
  //   return state.errors
  //     ? state.errors
  //         .filter((error) => error.field === fieldName)
  //         .map((error, index) => <li key={index}>{error.message}</li>)
  //     : [];
  // };

  return (
    <>
      <h1>Create a new post</h1>
      <form action={formAction}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
        {state.errors && (
          <ul className="form-errors">
            {state.errors.map((error, index) => (
              // Ensure unique key for each error
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
