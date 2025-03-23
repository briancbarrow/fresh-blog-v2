import { Handlers } from "$fresh/server.ts";
import { ReadwiseResponse } from "../../../types.ts";
import { BlogPage, Data } from "../../../components/blog-components.tsx";
import { frontMatter } from "../../../utils/markdown.ts";
import { config as dotEnvConfig } from "https://deno.land/std@v0.146.0/dotenv/mod.ts";

dotEnvConfig({ export: true });

export default BlogPage;

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    if (slug === "") {
      return new Response("", {
        status: 307,
        headers: { location: "/" },
      });
    }
    const url = new URL(
      `../../content/blog/tech/${slug}/index.md`,
      import.meta.url,
    );
    let fileContent;
    try {
      fileContent = await Deno.readTextFile(url);
    } catch (_err) {
      return new Response("404 Page not found", {
        status: 404,
      });
    }
    const { content, data } = frontMatter(fileContent) as {
      data: Record<string, string>;
      content: string;
    };
    let bookImg;
    if (!data.img) {
      const rd_book = await fetch(
        `https://readwise.io/api/v2/books/${data.book_id}`,
        {
          headers: {
            Authorization: `Token ${Deno.env.get("READWISE")}`,
          },
        },
      );

      const book = await rd_book.json();
      bookImg = book.cover_image_url;
    } else {
      bookImg = `/${data.img}`;
    }

    const page = {
      markdown: content,
      data: data ?? {},
      slug: slug,
      title: data.title,
      href: `/blog/${slug}`,
      file: url.pathname,
      book_id: data.book_id,
      link: data.link,
      img: bookImg,
    };

    const rd_quotes = await fetch(
      `https://readwise.io/api/v2/highlights/?book_id=${data.book_id}`,
      {
        headers: {
          Authorization: `Token ${Deno.env.get("READWISE")}`,
        },
      },
    );
    const quotes: ReadwiseResponse = await rd_quotes.json();

    const resp = ctx.render({ page, quotes: quotes.results });
    return resp;
  },
};
