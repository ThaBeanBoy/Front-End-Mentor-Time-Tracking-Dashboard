# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw).

![design](./design/desktop-preview.jpg)

## Table of contents

- [Frontend Mentor - Time tracking dashboard solution](#frontend-mentor---time-tracking-dashboard-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
      - [Learning Astro](#learning-astro)
      - [Layout \& Pages](#layout--pages)
      - [Installing astro packages](#installing-astro-packages)
      - [Using Js Frameworks \& Libraries](#using-js-frameworks--libraries)
      - [Sharing state between islands](#sharing-state-between-islands)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Perfomance](#perfomance)
    - [Responsiveness](#responsiveness)
    - [Lighthouse results](#lighthouse-results)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![desktop](./screenshots/screenshot.png)

### Links

- [GitHub Repo](https://github.com/ThaBeanBoy/Front-End-Mentor-Time-Tracking-Dashboard)
- [Add live site URL here](https://front-end-mentor-time-tracking-dashboard-ten.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind](https://styled-components.com/) - For styles
- [React](https://react.dev/) - JS library
- [Astro](https://astro.build/) - Static Site Generator
- [Vercel](https://vercel.com/) - Hosting website

### What I learned

#### Learning Astro

Astro is used to build static sites that supports multiple javascript frameworks & libraries, while shipping little javascript. From my understanding, Astro islands are similar to react components, but this time, but this time, islands are converted to static HTML. you caan find more information on the Astro's islands architecture [here](https://docs.astro.build/en/concepts/islands/)

Unlike other Frameworks & libraries I've worked with in the past, [Astro](https://astro.build/) generates a MPA (Multi-Page Application) intstead of an SPA (Single-Page Application). More details on this can be found [here](https://docs.astro.build/en/concepts/mpa-vs-spa/).

You can learn more [here](https://docs.astro.build/en/getting-started/)

#### Layout & Pages

The concept of a layout componet & different pages in the pages directory isn't a new thing to me. The only thing I had to learn when making a layout component is that you need to inset a `<slot />` in the layout, this is where the page would basically put it'self in.

**The code below is from the docs**

My [layout component](./src/layouts/Layout.astro)

```astro
---
import BaseHead from '../components/BaseHead.astro';
import Footer from '../components/Footer.astro';
const { title } = Astro.props;
---

<html lang='en'>
  <head>
    <meta charset='utf-8' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    <BaseHead title={title} />
  </head>
  <body>
    <nav>
      <a href='#'>Home</a>
      <a href='#'>Posts</a>
      <a href='#'>Contact</a>
    </nav>
    <h1>{title}</h1>
    <article>
      <slot />
      <!-- your content is injected here -->
    </article>
    <Footer />
  </body>
</html>
```

My [Homepage](./src/pages/index.astro)

```astro
---
import MySiteLayout from '../layouts/MySiteLayout.astro';
---

<MySiteLayout title='Home Page'>
  <p>My page content, wrapped in a layout!</p>
</MySiteLayout>
```

#### Installing astro packages

One of the most enjoyable things about Astro is working the CLI. This is a simple project, but when installing packages from astro, I didn't have to touch any config files. This seems small, but it automatically added tailwind, image & react to the [astro config](./astro.config.mjs).

For example, when I wanted to use [Tailwind](https://styled-components.com/), I simply ran the following command in the terminsal, `npx astro add tailwind`. I didn't have to manually install tailwind, configure [astro](./astro.config.mjs) etc... 😃

#### Using Js Frameworks & Libraries

In order to use react, I ran the following command:

```terminal
npx astro add react
```

I placed my react components inside the [components directory](./src/components/) & used the `.tsx` file extension.

importing and using the components was easy, this is how it looks like:

```astro
---
import Buttons from '../components/Buttons';
import DashboardCard from '../components/DashboardCard';
---

<Layout title='Time Tracking Dashboard'>
  <main>
    <Buttons client:load />

    <DashboardCard
      title={title}
      illustration={illustration}
      tframes={timeframes}
      bgColor={bgColor}
      client:idle
    />
  </main>
</Layout>
```

#### Sharing state between islands

### Continued development

It seems like I will have to learn [client:directives](https://docs.astro.build/en/reference/directives-reference/#client-directives) & other [directives](https://docs.astro.build/en/reference/directives-reference/)

```astro
<Buttons client:load />
```

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Tailwind Docs](https://tailwindcss.com/docs/) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Perfomance

### Responsiveness

I initially wanted to use flexbox, but eventually realised that css grid would fit this well. I wanted it to look good on desktop, tablet & mobile devices.

![tablet](screenshots/screenshot-tablet.png)

![mobile](screenshots/screenshot-mobile.png)

### Lighthouse results

![lighhouse results](./screenshots/lighthouse-results.png)

![perfomance](./screenshots/perfomace.png)

## Author

- GitHub - [@ThaBeanBoy](https://github.com/ThaBeanBoy)
- Frontend Mentor - [@ThaBeanBoy](https://www.frontendmentor.io/profile/ThaBeanBoy)
- LinkedIn - [Tineyi G Chipoyera](https://www.linkedin.com/in/tineyi-g-chipoyera-0948b9193/)
