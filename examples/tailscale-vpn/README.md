---
title: Tailscale VPN
description: Create a VPN using Tailscale.
tags:
  - tailscale
  - vpn
---

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fflask&envs=TAILSCALE_AUTHKEY&TAILSCALE_AUTHKEYDesc=tskey-%3Ckey%3E&referralCode=erics)

# Tailscale VPN

## Info

This is an easy-to-use example for creating your own private VPN on Railway.

## Steps

1. Create an account on [tailscale.com](https://tailscale.com/).
2. Follow the instructions to install tailscale on your own device that you want to connect to the VPN.
3. Go to the `settings` tab, and to go `keys`. Then, click on `Generate auth key...`
![settings page](./images/settings-page.png)
4. Generate an auth key, and check the options for making it **ephemeral** and **reusable**.
![generate auth key](./images/generate-auth-key.png)
5. Copy the key that it generates (It looks something like: `tskey-<key>`).
![copy auth key](./images/copy-auth-key.png)
6. Configure this starter, and put in the key as `TAILSCALE_AUTHKEY`.
7. Wait for it to finish deploying, and go to [the admin page](https://login.tailscale.com/admin/machines).
8. Where it says railway-app, click on the triple dots, and click `Edit route settings...`. Then, turn on the option that says `Use as exit node`.
![use as exit node](./images/use-as-exit-node.png)
9. Configure your computer to use the exit node, and you're done!