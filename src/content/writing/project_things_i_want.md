---
title: "[Side Project] Things I Want"
description: ''
pubDate: 'Jul 09 2023 11:08'
---

<!-- ![](Side%20Project%20-%20Things%20I%20Want/things-i-want.gif) -->
- Project Repository: https://github.com/rolemadelen/things-i-want
- Project Demo: https://want.madelen.me

# Project

_Things I Want_ is a website that showcases a collection of items I aspire to own in the future. This diverse collection encompasses everything from keyboards, monitors, and laptops to taiko drums and AR glasses. Currently, there are approximately 25 items listed, but I envision the list growing as time goes on and my desires evolve. The website serves a a personal catalog and a source of inspiration.

# Design

Below is the original design of the project that I created using Figma. I aimed for a minimalistic style, with a prominent grid line serving as the key visual element in the layout. However, due to my limited knowledge and skills, I encountered difficulties implementing the grid lines that spanned across the entire page. My initial approach worked, however, it wasn't idea for achieving a responsive user interface, as it only
worked for specific dimensions.

<!-- ![](Side%20Project%20-%20Things%20I%20Want/tiw-original-design.webp){"width":473} -->

I updated the design so that each cell now occupies the entire space without any gaps.
I ended up liking the design more than the initial one. It reminds me of Mondrian's artwork with its geometric compositions.

<!-- ![](Side%20Project%20-%20Things%20I%20Want/tiw-new-design.webp){"width":530} -->
# Tech Stack

As I'm currently learning [Svelte](https://svelte.dev/), I decided to utilize it for the front-end of my project. Although I acknowledge that my project structure may not be optimal and that I may not have fully utilized all the language's capabilities, I believe that practicing and learning go hand in hand. Embracing the learning process allows me to continuously improve and refine my skills in Svelte.

For the backend, I opted to utilize [Supabase](https://supabase.com/), an open-source alternative to Firebase. Supabase offers a seamless experience by allowing easy creation of database tables and providing a straightforward API that can be accessed through the Supabase client. One of the standout features of Supabase is that even in the free tier, there are no limits on API calls. Additionally, Supabase offers a convenient file storage solution where static file like images can be stored, allowing easy retrieval of URLs — a perfect fit for this particular project.

I utilized [netlify](https://www.netlify.com/) to swiftly deploy the app. And I configured a custom domain to provide personalized and memorable web address for the application.
