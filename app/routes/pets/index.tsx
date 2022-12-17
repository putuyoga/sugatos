import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const loader = async () => {
  return json({
    posts: [
      {
        slug: "umeng",
        name: "Com Com umeng",
      },
      {
        slug: "ucil",
        name: "Ucil martoyen",
      },
    ],
  });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main>
      <h1>Pets</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={post.slug} className="text-blue-600 underline">
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
