import { Handlers, PageProps } from "$fresh/server.ts";

import { frontMatter, getAllFiles } from "../../../utils/index.ts";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
}

export const handler: Handlers<BlogPost[]> = {
  async GET(_, ctx) {
    const posts: BlogPost[] = [];
    const files = await getAllFiles("./content/blog/books");

    for (const filePath of files) {
      console.log(filePath);
      if (!filePath.endsWith("index.md")) continue;
      const fileContent = await Deno.readTextFile(filePath);
      const { data } = frontMatter(fileContent) as {
        data: Record<string, string>;
      };
      if (!data.published) continue;
      const page = {
        description: data.description,
        title: data.title,
        date: data.date,
        slug: filePath.split("/").slice(-2, -1)[0],
      };
      posts.push(page);
    }

    posts.sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return ctx.render(posts);
  },
};

export default function Home({ data }: PageProps<BlogPost[]>) {
  return (
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Blog Posts
      </h1>
      <ul class="space-y-6">
        {data.map((post) => (
          <li
            key={post.slug}
            class="border-b border-gray-200 dark:border-gray-700 pb-4"
          >
            <a href={`/blog/${post.slug}`} class="block">
              <h2 class="text-2xl font-semibold text-teal-700 dark:text-teal-400 hover:underline">
                {post.title}
              </h2>
              <p class="text-gray-700 dark:text-gray-300 mt-2">
                {post.description}
              </p>
              <time class="text-sm text-gray-500 dark:text-gray-400 mt-1 block">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
