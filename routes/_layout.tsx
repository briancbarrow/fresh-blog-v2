import { PageProps } from "$fresh/server.ts";
import { Header } from "../islands/Header.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <html lang="en" class="h-full bg-gray-50 dark:bg-gray-900">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Brian Barrow</title>
      </head>
      <body class="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main class="flex-grow">
          <Component />
        </main>

        {/* Footer */}
        <footer class="bg-gray-100 dark:bg-gray-800 text-center py-4">
          <p class="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Brian Barrow. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
