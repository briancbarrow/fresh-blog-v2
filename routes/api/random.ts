import { FreshContext } from "$fresh/server.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const randomNumber = Math.floor(Math.random() * 6);
  // wait for randomNumber seconds
  const wait = new Promise((resolve) =>
    setTimeout(resolve, randomNumber * 1000)
  );
  // wait for the promise to resolve
  try {
    await wait;

    const shouldFail = Math.random() < 0.3; // 30% chance to fail
    if (shouldFail) {
      throw new Error("Random failure occurred");
    }

    const body = `Waited for ${randomNumber} seconds before responding.`;
    return new Response(body);
  } catch (_error) {
    return new Response(
      `An error occurred after waiting ${randomNumber} seconds.`,
      {
        status: 500,
      },
    );
  }
};
