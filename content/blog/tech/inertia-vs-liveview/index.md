---
title: Phoenix with Inertia.js vs LiveView
description: A comparison of Inertia.js and LiveView for building modern web applications.
img: inertia-vs-liveview/header.jpg
alt: The Inertia.js and LiveView logos
date: 2025-04-26
published: true
---

I've been messing around with Elixir and Phoenix for a little bit now, and being
a web developer I have definitely played with LiveView. Overall my experience
has been positive. A while back I did see this post on Bluesky from
[Brian Cardarella](https://bsky.app/profile/bcardarella.bsky.social/post/3lkv6sioelc2x)
highlighting [Dimitrios's blog post](https://dnlytras.com/blog/on-liveview)
about their experience with LiveView.

I thought it was a really interesting read, and it was nice to see a new
perspective on LiveView. I personally haven't had too many issues with it, and
when I did I was typically able to find a decent enough solution using another
tool like Alpine.js. I was intrigued though by the mention of using Inertia.js
with Phoenix. I had heard of Inertia.js before, but I never really looked into
it. So I decided to do a little digging and see what the differences were
between the two.

## What is Inertia.js?

Inertia.js is a framework-agnostic library that allows you to build modern
single-page applications (SPAs) using server-side routing and controllers. It
provides a way to create SPAs without the need for a full-fledged JavaScript
framework like React or Vue. Instead, you can use your existing server-side
framework (like Laravel, Rails, or Phoenix) to handle routing and data fetching,
while Inertia.js takes care of the client-side rendering. It was created with
Laravel in mind, but it has official adapters for other frameworks as well,
including Phoenix.

The idea behind Inertia.js is to provide a way to build SPAs that feel like
traditional server-rendered applications, while still taking advantage of the
benefits of client-side rendering. It allows you to use your existing
server-side framework to handle routing and data fetching, while still providing
a smooth and responsive user experience.

## Building a Todo app

In order to properly compare the two, I decided to build a simple Todo app using
both [Inertia.js](https://github.com/briancbarrow/phoenix_inertia_todo) and
[LiveView](https://github.com/briancbarrow/phoenix_liveview_todo). I wanted to
see how they compared in terms of ease of use, performance, and overall
developer experience. Getting a basic CRUD app running with LiveView is pretty
straightforward, especially using the Phoenix generators.

My goal in building the Inertia version was to get it to have a similar look and
feel as the LiveView version. This meant the form submission for creating and
updating todos would be handled inside of a modal. In my opinion, this is
handled very well in LiveView and you can easily create handler functions that
will properly validate the form and return any errors, setting them on the
socket.

When using Inertia, I really did like the idea of having the server handle
things like routing, data fetching and authentication. As I started to build the
app with it, things did seem to go relatively smoothly. I was able to get the
basic CRUD functionality up and running and still be able to handle flash
messages. Getting the "happy path" working was fairly straightforward. The
Inertia adapter does also provide an easy to use function for assigning errors
to the response. But that is where I started to run into some issues.

Although Inertia eventually ends up sending a JSON response back to the client,
it does so by calling the `render_inertia` function which takes in the name of
the component to render. It then passes the data to the component and renders
it. Because my React component was the TodoList page that also had the modal in
it, I then had to change the shape of my component to pass the appropriate data
to the modal and make sure it statyed open. That meant my previous iteration of
the page component was no longer valid and I was changing how I was interacting
with my client side code to make it work. That isn't necessarily a bad thing,
but I did start to wonder if this was something I really wanted to do. The whole
point of using Inertia was to be able to use my existing knowledge of frontend
frameworks and not need too much of a paradigm shift building the app. This felt
like I was having to change my approach to fit the library. If I am going to do
that, I felt like I might as well just embrace the LiveView way of doing things.

I will note that I was using React for the frontend, which is my least favorite
frontend framework. I don't have deep familiarity with it, so there is a chance
that this boils down to my own skill issues. The fact that there are whole other
libraries (see
[inertia-modal](https://inertiaui.com/inertia-modal/docs/introduction), as well
as
[this comment thread listing some on Laracasts.com](https://laracasts.com/discuss/channels/inertia/inertiajs-to-open-a-route-in-a-modal-window-with-this-package))
to make modals work better with Inertia does make me thing that this likely
isn't just a me issue.

## Testing

I presented the two different approaches at the Utah Elixir Meetup this week,
mostly highlighting the positives of Inertia. We often get glowing reviews of
LiveView in the Elixir space, and I wanted to show that there are other options
out there. During that presentation I did have a comment/question about the
differences in testing between the two approaches. To be honest, I haven't done
a lot of testing with either approach, but I do know that LiveView has a lot of
built in testing functionality. Inertia does have some standard approaches to
testing that you would expect (end to end, client side unit testing) as well as
[endpoint testing](https://inertiajs.com/testing). The adapter for Phoenix does
provide some
[decent helpers for testing](https://github.com/inertiajs/inertia-phoenix?tab=readme-ov-file#testing)
as well.

Even with that being said, I do think that LiveView has a leg up on Inertia when
it comes to testing. The fact that LiveView is built into the framework means
that it has a lot of built in functionality that makes testing easier. You can
easily test the socket and the state of the LiveView, as well as the
interactions with the client side code. Inertia, on the other hand, is a
third-party library that is built on top of Phoenix. It does a great job of
providing a way to build SPAs, but because there is still a level of separation
between the server and the client, I would need to bring in a separate testing
library to test the client side code. It is so incredibly nice to be able to
write something like this to test a client side interaction with LiveView:

```elixir
test "saves new task", %{conn: conn} do
      {:ok, index_live, _html} = live(conn, ~p"/tasks")

assert index_live |> element("a", "New Task") |> render_click() =~
               "New Task"

assert_patch(index_live, ~p"/tasks/new")
```

This is a pretty simple test that tests the rendering of the 'tasks' page and
then tests that the correct request is made when the user clicks the "New Task"
button. Not to mention that this test is auto generated when using the
`phx.gen.live` generator. If/when you end up changing the way the page works and
is laid out from what the generator creates, you can still use the generated
test as a starting point and still have access to testing the client side code.
That is a huge win for LiveView in my opinion.

## Conclusion

I was pretty excited to try out Inertia.js. I had heard a lot of good things
about it, and honestly a lot of the praise for it is well deserved. If you are
coming from a traditional SPA background, it is a great way to build SPAs if you
are fine with needing multiple testing libraries for each side of the app.

If I was to build a project using a different backend language, I would
definitely consider using Inertia.js.

For me though, I think I will stick with LiveView for now, at least when working
with Phoenix.
