---
title: Building an AI Soccer Coach in Elixir/Phoenix
description: Talking about my fun weekend project.
img: ai-soccer-coach/cover.png
alt: AI Soccer Coach
date: 06-02-2025
published: true
---

# The initial idea

A couple of months ago I wrote a small app building an AI agent in NextJS as part of my preparation for a job interview. It was a really fun project that I was able to spin up relatively quickly, but it wasn't a project I revisited after the interview process. The project has been stuck in my mind as something I would like to flesh out more.

As the coach for both of my sons' soccer teams, I am always trying to find ways to help the kids understand the game better. One thing we have been pushing the kids to do is to reflect on their performances after each game. Taking time to think about how things went is vital for improvement over time. Just like a software team will have a "Retrospective" meeting after a sprint cycle, making time to reflect on a soccer game can be just as beneficial for an athlete.

Obviously, I want to do this within reason, and at a level that will not put too much pressure on the kids. They are only kids after all, and too much pressure isn't healthy.

I also don't have time to talk to each player individually. We have 27 kids across the two teams so taking time to reflect with each one individually after each game isn't possible. The idea of being able to use AI to prompt the kids to think a little bit deeper about the game and reflect on what they can improve sounded like a really good use of an AI agent.

# Re-writing in Elixir/Phoenix

This weekend I decided to come back to the project, but I wanted to start it over and build it in Elixir/Phoenix. Mostly because Elixir has been my hobby language with Phoenix as the framework, but also because I have a couple of interviews coming up this week for Elixir/Phoenix jobs and I wanted to be better prepared for those, while also having a more recent project to speak about during those conversations. I also would like to see this project through to an actual MVP that I could use to send to my players, and in my humble opinion, writing things in Elixir and Phoenix is a lot more fun than writing things in NextJS and React.

## Improvements

After getting the app to feature parity with the original NextJS version, I realized there were some things I could add/change to make it a little bit easier to use, especially for kids.

First, getting the conversation started felt awkward. It was dependent on the player making the first message. While they would probably get the hang of it after using it for a while, I wanted to make it easier for the kids to get started, so it made sense to have the AI Coach start the conversation. So I added an easy to see button the user can click that kicks off the conversation with a call to the Anthropic API.

I also added a clean looking loading indicator for when the Agent is "thinking". Using the app before this addition felt really weird. You couldn't tell if it was working or not. I still need to add some sort of message when calls to the AI APIs fail, but just having the loading indicator makes things much nicer. Also, now that DaisyUI is included by default in Phoenix applications, adding a nice looking loading indicator is incredibly easy.

```elixir
<%= if @is_loading do %>
  <div class="text-left badge badge-secondary bg-secondary text-secondary-content">
    <span class="loading loading-dots loading-md"></span>
  </div>
<% end %>
```

The other thing I really wanted to add was a way for the kids to more easily add their side of the conversation. With the AI Agent being a text based interaction, and most 8 year olds not being great at typing on a keyboard, I thought having a way for them to speak to add their side would be good. Having worked at Deepgram, I knew it would be relatively easy to get a speech-to-text feature added.

This was a really interesting feature to add in a Phoenix LiveView application. Up to this point, I haven't had a lot of need for JS Hooks in my LiveView projects. Using Claude as a pair programming partner I was able to better understand how Hooks work within LiveView, and get the feature added to my project. Hooks are definitely something I need to look into more, and I also wonder if it would be easier using something like AlpineJS or even LiveSvelte or LiveVue. Those things have been on my list of things to look into, so that will definitely be something I explore in the coming weeks.

Rather than just submitting the text returned from the speech-to-text, I set it as the value in the textarea, just so the user can edit it if they want. I'll need to look at how that feature gets used to see if the ergonomics of the feature are easy to use. I figured it would be good for now.

## End Result

I think the end result of the project is pretty nice. There are definitely some things I need to add before it can be put into full use, but I think the foundation of the project is solid, and I'm excited to keep working on it.

The [code for the project is on my GitHub](https://github.com/briancbarrow/soccer-reflection-elixir) and you can test it out at this link: https://soccer-reflection-coach.gigalixirapp.com/coach. Feel free to give it a try. Below is a recording of the project being used.

<video src="/ai-soccer-coach/screen-recording.mov" controls></video>
