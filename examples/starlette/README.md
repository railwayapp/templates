---
title: Starlette
description: A Starlette app with a simple JSON response
tags:
  - python
  - starlette
---

# Python Starlette Example

This is a [Starlette](https://www.starlette.io/) app that serves a simple JSON response.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fstarlette)

## ✨ Features

- Python
- Starlette

## 💁‍♀️ How to use

- Build the docker image `docker build -t railway .`
- Start the container `docker run -d --name railway-test -p 80:80 railway`
- For auto restart in development `docker run -d -p 80:80 -v $(pwd):/app railway /start-reload.sh`

Note: Advance users may refer to [this](https://github.com/tiangolo/uvicorn-gunicorn-starlette-docker)
