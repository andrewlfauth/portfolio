---
layout: ../../layouts/BlogLayout.astro
title: 'Custom Website Themes with TailwindCSS'
pubDate: 2022-07-01
description: 'Learn how Tailwind custom variants can make website theming a breeze.'
author: 'Andrew Fauth'
imageUrl: 'https://images.unsplash.com/photo-1502014822147-1aedfb0676e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D'
imageAlt: 'image by Ilnur Kalimullin'
tags: ['TailwindCSS', 'Web Design', 'JavaScript']
---

# Custom Website Themes with TailwindCSS

<span class="text-xs -mt-6 block">12/11/2023</span>

If you are familiar with Tailwind then you've probably seen that we can prefix a utility class with the <code>dark:</code> variant to provide different styles when the user's browser is in dark mode.

Wouldn't it be cool if we could extend this functionality to enable alternative stylings for a variety of themes on our websites? Let's take a look at how you can create your own **custom variants** with TailwindCSS.

```js
// tailwind.config
const variants = ['material', 'catppuccin', 'nightowl']
```

We start by naming each of our custom themes. For this website I've chosen three themes that are be based on popular cross-editor color palettes. Then, insert each value into an array inside your `tailwind.config` file.

It's important to note that these values will function as our variants. Just as we employ the `dark:` variant, the styling of your themes will be accomplished using the chosen names. For instance, I might apply styles with `nightowl:bg-gray-900`.

```js
// tailwind.config
const plugin = require('tailwindcss/plugin')
const variants = ['material', 'catppuccin', 'nightowl']
```

We will be using Tailwind's `plugin` function to register our custom vairants. Plugins allow you to add new styles to Tailwind using JavaScript, and they'll get seamlessly injected into your stylesheet.

```js
// tailwind.config
const plugin = require('tailwindcss/plugin')
const variants = ['material', 'catppuccin', 'nightowl']

const customVariants = plugin(({ addVariant, e }) => {})
```

The `plugin` function takes an object as an argument that can be destructured into helper functions that Tailwind offers. The ones that we are interested in are `addVariant` and `e`.

`addVariant` is used to register custom static variants (our themes), while the `e` utility function will escape strings that we want to use as class names.

```js
// tailwind.config
const plugin = require('tailwindcss/plugin')
const variants = ['material', 'catppuccin', 'nightowl']

const customVariants = plugin(({ addVariant, e }) => {
  variants.map((variant) =>
    addVariant(variant, ({ modifySelectors, separator }) => {})
  )
})
```

Now we want to map over each of value in our `variants` array, and return the value of `addVariant` for each theme. The first argument for `addVariant` is the name of our custom variant (theme: string), and the second is a format string that represents how the selector should be modified.

Because we want our variants to act dynamically, we need to use a function call to assemble our selector modifier.

```js
// tailwind.config
const plugin = require('tailwindcss/plugin')
const variants = ['material', 'catppuccin', 'nightowl']

const customVariants = plugin(({ addVariant, e }) => {
  variants.map((variant) =>
    addVariant(variant, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const element = e(`${variant}${separator}${className}`)
        return `.${variant} .${element}`
      })
    })
  )
})
```

Inside the `modifySelectors` function, we use the e utility function to escape the variant name and then create a modified selector by combining the escaped variant, separator, and the original class name. This modified selector is then returned.

For example, if you have a class like bg-purple-900, and the variant is 'catppuccin', the modified selector will be .catppuccin .catppuccin\:bg-purple-500. The \.bg- is an escape for the colon (:) in the class name.

```js
// tailwind.config
const plugin = require('tailwindcss/plugin')
const variants = ['material', 'catppuccin', 'nightowl']

const customVariants = plugin(({ addVariant, e }) => {
  variants.map((variant) =>
    addVariant(variant, ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        const element = e(`${variant}${separator}${className}`)
        return `.${variant} .${element}`
      })
    })
  )
})

module.exports = {
  // existing config
  plugins: [customVariants],
}
```

Now, we register our `customVariants` as a plugin within our config export. Great job! Now you can use your own custom themes with convient Tailwind variants.

In order for the variant styles to be applied we need to have the theme name as a class on the document somewhere. On this site clicking the button on the top-left allows you to select a color theme.

When you select a theme, the classlist on the `html` element gets emptied and then the chosen theme is added as a class. For example, clicking the orange circle will change the theme to **nightowl**.

```html
<html class="nightowl">
  <!-- head, body, etc. -->
</html>
```

Now, any styles using the `nightowl:` variant will be applied. How you handle the implementation of your theming is up to you, this is a way I have found that works well for me.

Other approaches I have seen are adding the theme class on the `body` element. You could also theme only specific components by assigning the theme class to it's parent element.
