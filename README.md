# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

![design](./design/desktop-preview.jpg)

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Responsiveness](#responsiveness)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Learning Astro](#learning-astro)
      - [Astro CLI](#astro-cli)
      - [Using Js Frameworks \& Libraries](#using-js-frameworks--libraries)
      - [Sharing state between islands](#sharing-state-between-islands)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![desktop](./screenshots/screenshot.png)

### Responsiveness

![tablet](screenshots/screenshot-tablet.png)

![mobile](screenshots/screenshot-mobile.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://styled-components.com/) - For styles
- [React](https://reactjs.org/) - JS library
- [Astro](https://nextjs.org/) - Static Site Generator
- [Vercel](https://nextjs.org/) - Hosting website

### What I learned

#### Learning Astro

Astro is used to build static sites that supports multiple javascript frameworks & libraries, while shipping little javascript.

#### Astro CLI

One of the most enjoyable things about Astro is working the CLI. This is a simple project, but when installing packages from astro, I didn't have to touch any config files. This seems small, but it automatically added tailwind, image & react to the [astro config](./astro.config.mjs).

#### Using Js Frameworks & Libraries

#### Sharing state between islands

### Continued development

It seems like I will have to learn load directives

```.astro
<Buttons client:load />
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Tailwind Docs](https://tailwindcss.com/docs/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
- LinkedIn - [@yourusername](https://www.twitter.com/yourusername)
