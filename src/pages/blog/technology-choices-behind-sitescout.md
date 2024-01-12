---
layout: ../../layouts/BlogLayout.astro
title: 'The Tech Stack Behind SiteScout.pro'
pubDate: 2022-07-01
description: 'Get a glimpse into the technology decisions that went into creating sitescout.pro.'
author: 'Andrew Fauth'
imageUrl: 'https://cdn.midjourney.com/fca5145b-91fe-4a26-a0b2-77fd625a39c6/0_0.webp'
imageAlt: 'image by Midjourney'
tags: ['SaaS', 'Site Scout']
---

# The Tech Stack Behind SiteScout.pro

In this article I'll be going over some of the technology choices that went into creating the <a href="https://sitescout.pro" target="_blank" rel="noreferrer">sitescout.pro</a> web app.

Site Scout is a SEO tool that empowers anybody to enhance their website's visibility in search without the need of prior SEO knowledge or large marketing budgets.

## The Stack

Here is a quick overview of the tech stack behind Site Scout.

### Remix

Remix is a full stack web framework that places an emphasis on web standards. In Remix you use React on the front-end to build your UI, so obviously React is a big part of the stack as well, but this is implied when your using Remix.

I chose Remix because it is extremely accessible for a front-end developer to create a full stack application. Remix <code>Loader</code> and <code>Action</code> functions make it extremely easy to do work on the server and the return data to your front-end React components.

Remix V2 was released in the middle of developing Site Scout. Thankfully, the Remix team was focused on allowing for incremental adoption, and it was easy to opt into the new routing conventions and other changes with the help of <b>Future Flags</b>.

### TailwindCSS

I chose to use TailwinCSS for the ease and speed that it provides when styling html. With Tailwind I was able to quickly make changes to styles until I was satisifed with them. This allowed me to focus more of my energy on developing features for the app.

One critique I have heard about Tailwind is that it isn't a viable option for projects with a large team of developers. While I don't know if that is an accurate statement or simply the opinion of someone who perfers using SASS, I was the only dev working on Site Scout so that was never going to be an issue.

Another huge benefit of Tailwind is the baked in <b>Design Tokens</b>. One issue I have with Bootstrap is I tend to notice a similar appearance in websites that use it. Tailwind on the other hand provides you with design tokens and lets you assemble them however you want.

### Jotai

Jotai is state manager for React. While I've notice that Remix certainly reduces the need for gloabl state in a React application, I still ran into some occasions where it was neccesary.

I love Jotai for it's simple api and primitives. Creating gloabl state in your React app is as easy as...

```js
import { atom, useAtom } from 'jotai'

const countAtom = atom(0)

const Component = () => {
  const [count, updateCount] = useAtom(countAtom)
  // ...
}
```

### Firebase

I tried Firebase, and I liked it. This was my first time using a "Backend as a Service" provider and I was impressed. I did have some headaches initially with setting everything up in Remix, but found a couple articles that helped.

Once everything was configured I really enjoyed working with it. Managing user auth was pretty chill, I decided to allow for Google signup/signin and email and password. Things like handling password resets are quick and easy with Firebase.

The Firestore query api took some getting used to. I found myself sometimes being forced into making two consecutive database calls to complete an operation when surely there was a way to handle it in one. Further research determined that for that scenario, two calls was the only way to handle it. But these instances were few and far between.

### Stripe

For payment processing I chose Stripe. This was the first time I implemented a suscription based application and Stripe was a good fit. The stripe SDK made it super easy to allow users to subscribe after payment and update their profiles accrodingly.

I used Stripe <b>webhooks</b> to handle events sent from Stripe like a user cancelation or payment completion. This allowed for the majority of my payment and subscription logic to be located in a single route. Plus, who wants to store customer credit card numbers? Nah.

## Conclusion

Well, that wraps up a glimpse into the Site Scout tech stack. I am happy with where things stand with Site Scout. I continue to rollout new features and have found the project to be very maintainable.

If I had to characterize the stack in a few words, I would say <b>"modern"</b> and <b>"javascript."</b> Lately I find myself wondering "Could I have done it with <b>HTMX</b>?" I guess we won't know... until the rewrite.
