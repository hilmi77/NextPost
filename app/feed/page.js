import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

//dynamic metadata
export async function generateMetadata() {
  const posts = await getPosts();
  const numberOfPosts = posts.length;
  return {
    title: `The number of posts is ${numberOfPosts}`,
    description: "Browse all posts by all users",
  };
}

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
