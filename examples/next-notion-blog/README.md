---
title: NextJS Notion Blog
description: A NextJS app using Notion as a CMS for a blog
tags:
  - next
  - notion
  - tailwind
  - typescript
---

# NextJS Notion blog example

This is an example [NextJS](https://nextjs.org/) app that uses [Notion](https://www.notion.so/) as a CMS for a blog.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fnext-notion-blog&envs=BLOG_INDEX_ID%2CNOTION_TOKEN)

## ✨ Features

- NextJS
- TypeScript
- TailwindCSS
- Notion as a CMS

## 💁‍♀️ How to use

- When you deploy your application using the link above, we will ask you for the `NOTION_TOKEN` and the `BLOG_INDEX_ID`. This section will guide you on how to get those variables and deploy your blog to Railway.

  - **Blog index ID**: If the URL of your page is https://www.notion.so/Blog-eb3df599cd9b4a8284c0f41bf5563966, then your BLOG_INDEX_ID would be eb3df599cd9b4a8284c0f41bf5563966. Basically, the part after your page title in the URL bar.

  ![Blog index ID](https://user-images.githubusercontent.com/10681116/116751615-4a514b00-a9d2-11eb-86ed-5780e8f3c54c.jpeg)

  - **Notion token**: To get this, just look for the token_v2 cookie while on Notion.

  ![Notion token](https://user-images.githubusercontent.com/10681116/116751809-94d2c780-a9d2-11eb-8ae0-ed8c58ff75b3.jpeg)

## 📝 Notes

- Based on what your source for the images is, you will need to update the `images` key inside `next.config.js` otherwise your images will not render properly.
