import { JSX } from "preact";

export default function AboutPage(): JSX.Element {
  return (
    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        About Me
      </h1>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        My name is Brian and I am a full stack web developer with experience in
        several modern technologies. I like being part of a team where I can see
        my individual contributions reach a common goal. I like helping the
        community and enjoy taking the lead on community driven events/projects.
        I am currently an organizer for the UtahJS conference, and have been for
        the past 4 years. For the last 9 years I have been running a study group
        in the Salt Lake City area for people learning to code. I love being
        able to create things using code and find it very rewarding. I am
        passionate about mentoring and helping others grow.
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        I believe in the power of learning and storytelling, and I hope that
        through this blog, I can pass on information I have learned. Lately I
        have been on a journey to approach software development as a craft,
        rather than just a job. I have been reading{" "}
        <a
          href="https://www.oreilly.com/library/view/the-software-craftsman/9780134052625/"
          target="_blank"
        >
          The Software Craftsman" by Sandro Mancuso
        </a>. One of the things he mentioned was blogging about the things you
        learn. I have not been really good at that lately so I am trying to get
        back into it.
      </p>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
        Feel free to reach out if you'd like to connect or collaborate. Thank
        you for visiting, and I hope you enjoy your time here!
      </p>
    </main>
  );
}
