import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div class="px-4 py-8 mx-auto min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div class="max-w-screen-md text-center">
          <img
            class="mx-auto mb-6"
            src="/logo.svg"
            width="128"
            height="128"
            alt="The Fresh logo: a sliced lemon dripping with juice"
          />
          <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100">
            404 - Page Not Found
          </h1>
          <p class="my-4 text-gray-700 dark:text-gray-300">
            Sorry, the page you were looking for doesn’t exist or has been
            moved.
          </p>
          <a
            href="/"
            class="inline-block px-6 py-2 mt-4 text-white bg-teal-500 hover:bg-teal-600 dark:bg-teal-400 dark:hover:bg-teal-500 rounded-md transition"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
}
