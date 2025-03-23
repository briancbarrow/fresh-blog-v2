import { Quote } from "../types.ts";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { gfm } from "../utils/markdown.ts";

export interface Page {
  markdown: string;
  data: Record<string, string>;
  slug: string;
  title: string;
  category?: string;
  href: string;
  file: string;
  book_id: string;
  link: string;
  img: string;
}

export interface Data {
  page: Page;
  quotes: Quote[];
}

export function BlogPage(props: PageProps<Data>) {
  let description;
  if (props.data.page.data.description) {
    description = String(props.data.page.data.description);
  }
  return (
    <>
      <Head>
        <title>{props.data.page?.title ?? "Not Found"} | Brian Blog</title>
        {/* <link rel="stylesheet" href="/gfm.css" /> */}
        <style>${gfm.CSS}</style>
        <meta name="twitter:card" content="summary_large_image" />
        {description && <meta name="description" content={description} />}
        <meta
          property="og:title"
          content={`${props.data.page?.title ?? "Not Found"} | Brian Blog`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={props.url.href} />
        <meta
          property="og:image"
          content={props.url.origin + props.data.page.img}
        />
        <meta name="robots" content="index, follow" />
      </Head>
      {/* <NavBar /> */}
      <Main
        path={props.url.pathname}
        page={props.data.page}
        quotes={props.data.quotes}
      />
    </>
  );
}

function Main(props: { path: string; page: Page; quotes: Quote[] }) {
  return (
    <div class="blog-post">
      <Content page={props.page} />

      {props.quotes?.length > 0 &&
        <Quotes quotes={props.quotes} />}
    </div>
  );
}

function Content(props: { page: Page }) {
  const html = gfm.render(props.page.markdown);
  const description = props.page.data.description;
  return (
    <main class="py-8 overflow-hidden max-w-prose m-auto">
      <div class="max-w-2xl m-auto mt-4">
        <a target="_blank" href={props.page.data.link}>
          <img
            class="w-full max-w-2xl m-auto rounded-lg"
            src={props.page.img}
          />
        </a>
      </div>
      <h1 class="block md:mt-10 mt-4 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900  sm:text-4xl">
        {props.page.title}
      </h1>
      <p class="mt-8 text-xl leading-8 text-gray-500">{description}</p>
      <div
        class="mx-auto mt-6 prose prose-lg text-gray-500 markdown-body"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}

function Quotes(props: { quotes: Quote[] }) {
  return (
    <div class=" m-auto pt-10">
      <div class="max-w-prose m-auto">
        <h3 class="text-2xl leading-5 font-semibold m-auto mb-4 border-b border-borderGrey pb-2">
          My Highlights from the book
        </h3>
        {props.quotes
          ? props.quotes.map((quote: Quote) => {
            return (
              <div class="px-16 py-8 m-auto bg-lightBlue rounded mb-6">
                <p class="text-lg">{quote.text}</p>
              </div>
            );
          })
          : ""}
      </div>
    </div>
  );
}
