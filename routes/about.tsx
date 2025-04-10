import { JSX } from "preact";

export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* <!-- Page Header --> */}
      <div class="bg-gradient-to-r from-slate-100 to-blue-100 text-slate-800">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight sm:text-5xl text-slate-700">
              About Me
            </h1>
            <p class="mt-6 text-xl max-w-3xl mx-auto text-slate-600">
              Developer, Community Builder, and Lifelong Learner
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Main Content --> */}
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* <!-- Profile Section --> */}
        <div class="flex flex-col md:flex-row items-center md:items-start gap-12 mb-16">
          <div>
            <div class="prose prose-lg max-w-none text-gray-700">
              <p class="mb-4">
                I am a full stack web developer with experience in several
                modern technologies. I like being part of a team where I can see
                my individual contributions reach a common goal. I like helping
                the community and enjoy taking the lead on community driven
                events/projects.
              </p>
              <p class="mb-4">
                I am currently an organizer for the UtahJS conference, and have
                been for the past 4 years. For the last 9 years I have been
                running a study group in the Salt Lake City area for people
                learning to code.
              </p>
              <p class="mb-4">
                I love being able to create things using code and find it very
                rewarding. I am passionate about mentoring and helping others
                grow.
              </p>
            </div>
          </div>
        </div>

        {/* <!-- Key Competencies --> */}
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
            Key Competencies
          </h2>

          {/* <!-- Software Development --> */}
          <div class="mb-12">
            <div class="flex items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800">
                Software Development
              </h3>
            </div>

            <div>
              <p class="text-gray-700 mb-4">
                My main skills surround the JavaScript ecosystem with most of my
                experience with Vue, Node and Python/Django, but I have also
                used Svelte, React, Astro, and Deno. I started learning Go in
                2022 in order to develop the first version of the Go SDK for the
                Deepgram API and have enjoyed working in it.
              </p>
              <p class="text-gray-700">
                I also recently started learning Elixir to see how functional
                programming can help my understanding of programming paradigms.
                Using Phoenix LiveView has been a fun learning experience.
              </p>

              {/* <!-- Tech Stack --> */}
              <div class="mt-8">
                <h4 class="text-lg font-semibold text-gray-800 mb-4">
                  Technologies I Work With
                </h4>
                <div class="flex flex-wrap gap-3">
                  <span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                    JavaScript
                  </span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Vue
                  </span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    React
                  </span>
                  <span class="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    Svelte
                  </span>
                  <span class="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                    Astro
                  </span>
                  <span class="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                    Node.js
                  </span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                    Deno
                  </span>
                  <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Python
                  </span>
                  <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                    Django
                  </span>
                  <span class="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm">
                    Go
                  </span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Elixir
                  </span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                    Phoenix
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Community Building --> */}
          <div>
            <div class="flex items-center mb-4">
              <h3 class="text-xl font-bold text-gray-800">
                Community Building
              </h3>
            </div>

            <div>
              <p class="text-gray-700 mb-4">
                My favorite accomplishments have been centered around the work
                I've done in communities and helping others, in both organizing
                events and speaking at conferences. In fact, because I've
                enjoyed Elixir so much, I re-booted the Utah Elixir meetup group
                earlier this year.
              </p>

              {/* <!-- Community Involvement --> */}
              <div class="mt-8 space-y-6">
                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">
                    Organizer{" "}
                    <a class="text-link" href="https://utahjs.com/conference">
                      UtahJS Conference
                    </a>
                  </h4>
                  <p class="text-gray-600 text-sm mb-2">2021 - Present</p>
                  <p class="text-gray-700">
                    Helping coordinate one of Utah's largest JavaScript
                    conferences, bringing together developers from across the
                    region for learning and networking.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">
                    Founder -{" "}
                    <a
                      class="text-link"
                      href="https://www.meetup.com/utahjs/events/306730151/?eventOrigin=home_next_event_you_are_hosting"
                    >
                      freeCodeCamp Study Group
                    </a>
                  </h4>
                  <p class="text-gray-600 text-sm mb-2">2016 - Present</p>
                  <p class="text-gray-700">
                    Running a weekly study group in Salt Lake City for people
                    learning to code, creating a supportive environment for
                    beginners and experienced developers alike.
                  </p>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h4 class="text-lg font-semibold text-gray-800 mb-2">
                    Organizer -{" "}
                    <a
                      class="text-link"
                      href="https://www.meetup.com/utah-elixir/?eventOrigin=home_groups_you_organize"
                    >
                      Utah Elixir Meetup
                    </a>
                  </h4>
                  <p class="text-gray-600 text-sm mb-2">2025 - Present</p>
                  <p class="text-gray-700">
                    Recently rebooted the Utah Elixir meetup group to build a
                    community around functional programming and the Elixir
                    ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Speaking Experience --> */}
        <div class="mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8 pb-2 border-b border-gray-200">
            Speaking Experience
          </h2>

          <p class="text-gray-700 mb-6">
            I enjoy sharing knowledge and insights through conference talks and
            workshop presentations.
          </p>

          <div class="space-y-8">
            <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3">
                  <a
                    href="https://youtu.be/_QEPbSFkKhI"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://user-images.githubusercontent.com/13695093/212145514-980d171e-99cf-4354-baa1-b98813d4b06c.png"
                      alt="Deno talk - UtahJS 2022"
                      class="h-full w-full object-cover"
                    />
                  </a>
                </div>
                <div class="p-6 md:w-2/3">
                  <h4 class="text-lg font-semibold text-gray-800">
                    A Fresh Look At Deno
                  </h4>
                  <p class="text-gray-600 text-sm mb-2">
                    UtahJS Conference, 2022
                  </p>
                  <p class="text-gray-700 mb-4">
                    Explored the Deno runtime and Fresh framework.
                  </p>
                  <a
                    href="https://youtu.be/_QEPbSFkKhI"
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      class="h-4 w-4 mr-2 fill-current"
                    >
                      <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" />
                    </svg>
                    Watch Talk
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div class="flex flex-col md:flex-row">
                <div class="md:w-1/3">
                  <a
                    href="https://youtu.be/umVA30H-4n4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://user-images.githubusercontent.com/13695093/212145945-89e49ec3-89af-4376-9118-8f5b90d3859e.png"
                      alt="Phoenix LiveView Talk"
                      class="h-full w-full object-cover"
                    />
                  </a>
                </div>

                <div class="p-6 md:w-2/3">
                  <h4 class="text-lg font-semibold text-gray-800">
                    Styling with Style - Flexbox
                  </h4>
                  <p class="text-gray-600 text-sm mb-2">
                    Utah Elixir Meetup, 2024
                  </p>
                  <p class="text-gray-700 mb-4">
                    Gave a joint presentation on Flexbox and CSS Grid
                  </p>
                  <a
                    href="https://youtu.be/umVA30H-4n4"
                    class="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      class="h-4 w-4 mr-2 fill-current"
                    >
                      <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                    View Slides
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Get In Touch --> */}
        <div class="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-8 mb-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p class="text-gray-700 mb-6">
            I'm always open to discussing new projects, speaking opportunities,
            or just chatting about tech. Feel free to reach out!
          </p>

          <div class="flex flex-wrap gap-4">
            <a
              href="https://github.com/briancbarrow"
              class="inline-flex items-center justify-center px-3 py-3 bg-slate-700 text-white font-medium rounded-md hover:bg-slate-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                class="h-6 w-6 fill-current transition-colors duration-100 mr-2"
              >
                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>{" "}
              GitHub
            </a>
            <a
              href="https://bsky.app/profile/thebrianb.bsky.social"
              class="inline-flex items-center justify-center px-3 py-3 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                class="h-6 w-6 fill-current transition-colors duration-100 mr-2"
              >
                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                <path d="M111.8 62.2C170.2 105.9 233 194.7 256 242.4c23-47.6 85.8-136.4 144.2-180.2c42.1-31.6 110.3-56 110.3 21.8c0 15.5-8.9 130.5-14.1 149.2C478.2 298 412 314.6 353.1 304.5c102.9 17.5 129.1 75.5 72.5 133.5c-107.4 110.2-154.3-27.6-166.3-62.9l0 0c-1.7-4.9-2.6-7.8-3.3-7.8s-1.6 3-3.3 7.8l0 0c-12 35.3-59 173.1-166.3 62.9c-56.5-58-30.4-116 72.5-133.5C100 314.6 33.8 298 15.7 233.1C10.4 214.4 1.5 99.4 1.5 83.9c0-77.8 68.2-53.4 110.3-21.8z" />
              </svg>{" "}
              Bluesky
            </a>
            <a
              href="https://www.linkedin.com/in/barrowbrian/"
              class="inline-flex items-center justify-center px-3 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="h-6 w-6 fill-current transition-colors duration-100 mr-2"
              >
                {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>{" "}
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
