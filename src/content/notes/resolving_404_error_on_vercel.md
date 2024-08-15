---
title: "Resolving 404 error on Vercel"
description: ''
pubDate: 'May 18 2024 15:00'
---

Add the following to the `vercel.json` file:

```json
{
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

//

After deploying my side project, YourTrack, on Vercel, at first, it seemed to be working fine because it successfully loaded the authentication page to connect with Spotify.

However, once I agreed to connect and the page reloaded to return to the preview flow, I encountered a 404 NOT FOUND error.

Initially, I thought it was a configuration error with Vite and React, but it turns out that it wasn't. It was actually quite simple.

I had to add a configuration file for Vercel so that when my page reloads or goes to a different route, it doesn't show a 404 page.

Add the following to the `vercel.json` file:

```json
{
    "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Re-deploy your app, and it should work fine.

## References
- How to solve React Vite 404 Error on Vercel. (n.d.). Stack Overflow. https://stackoverflow.com/questions/76379501/how-to-solve-react-vite-404-error-on-vercel