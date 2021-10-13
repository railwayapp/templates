---
title: NGINX
description: Deploy a static HTML file with NGINX
tags:
  - nginx
  - static
---

# NGINX Example

This example is deploys a site using [NGINX](https://www.nginx.com/)

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fnginx&envs=PORT&optionalEnvs=PORT&PORTDefault=80)


## ✨ Features

- NGINX
- Static Site

## 💁‍♀️ How to use

- Open the `site/index.html` in the browser

## 📝 Notes

By default the `site/` directory gets deployed as a static site. This can be modified by changing the `Dockerfile`.

The site is deployed using the default NGINX configuration. This can be overridden with a custom conf file by adding

```
COPY nginx.conf /etc/nginx/nginx.conf
```

to the end of the Dockerfile. For more information, [read the docs](https://hub.docker.com/_/nginx).
