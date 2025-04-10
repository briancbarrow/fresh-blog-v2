import { Handlers, PageProps } from "$fresh/server.ts";

import { frontMatter, getAllFiles } from "../utils/index.ts";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  slug: string;
  img: string;
}

export const handler: Handlers<BlogPost[]> = {
  async GET(_, ctx) {
    const posts: BlogPost[] = [];
    const files = await getAllFiles("./content/blog/tech");

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
        img: data.img,
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
    <>
      <div class="bg-gray-50 text-slate-800">
        {/* <!-- About Me Summary --> */}
        <div class="bg-gray-100">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="flex flex-col lg:flex-row gap-12 items-center">
              <div class="lg:w-1/3">
                <div class="bg-gray-300 rounded-full w-48 h-48 mx-auto">
                  <img
                    src="/images/avatar.jpg"
                    alt="Profile"
                    class="rounded-full h-48 w-48 object-cover"
                  />
                </div>
              </div>
              <div class="lg:w-2/3 text-center lg:text-left">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                <p class="text-lg text-gray-700 mb-4">
                  I'm a full stack web developer with experience in JavaScript,
                  Python, Go, and recently Elixir. I'm passionate about
                  community building and helping others grow in tech.
                </p>
                <p class="text-lg text-gray-700 mb-6">
                  As an organizer for the UtahJS conference and founder of a
                  coding study group in Salt Lake City, I enjoy creating
                  opportunities for developers to learn and connect. I recently
                  rebooted the Utah Elixir meetup group to share my enthusiasm
                  for functional programming.
                </p>
                <a
                  href="/about"
                  class="inline-block px-6 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
                >
                  Learn More About Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-white">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div class="text-center mb-12">
              <h2 class="text-3xl font-bold text-gray-900">
                Blog Posts
              </h2>
              {
                /* <p class="mt-4 text-lg text-gray-600">
                My latest insights and tutorials
              </p> */
              }
            </div>
            <ul class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {data.map((post) => (
                <li
                  key={post.slug}
                  class="bg-white rounded-lg shadow overflow-hidden"
                >
                  <div class="bg-blue-100 h-48 flex items-center justify-center">
                    <img
                      src={`/${post.img}`}
                      alt="Article thumbnail"
                      class="h-full w-full object-cover"
                    />
                  </div>
                  <div class="p-6">
                    <time class="text-sm text-gray-500 dark:text-gray-400 mt-1 block">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <h3 class="text-xl font-bold mb-2">
                      {post.title}
                    </h3>
                    <p class="text-gray-600 mb-4">
                      {post.description}
                    </p>
                    <a
                      href={`blog/${post.slug}`}
                      class="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            {
              /* <div class="text-center mt-12">
              <a
                href="/articles"
                class="inline-block px-6 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
              >
                View All Articles
              </a>
            </div> */
            }
          </div>
        </div>
      </div>
    </>
  );
}
