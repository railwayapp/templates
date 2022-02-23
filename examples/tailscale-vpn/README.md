---
title: Tailscale VPN
description: Create a VPN using Tailscale.
tags:
  - tailscale
  - vpn
---

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailway%2Fstarters%2Ftree%2Fmaster%2Fexamples%2Ftailscale-vpn&envs=TAILSCALE_AUTHKEY&referralCode=erics)

# Tailscale VPN

## Info

This is an easy-to-use example for creating your own private VPN on Railway.

## Steps

1. Create an account on [tailscale.com](https://tailscale.com/).
![get started](./images/get-started.png)
2. Follow the instructions to install Tailscale on your own device that you want to connect to the VPN.
3. Go to the **Settings** tab, and to go **Keys**. Then, click on **Generate auth key...**.
![settings page](./images/settings-page.png)
4. Select the options for making it **Ephemeral** and **Reusable**, then click **Generate key**.
![generate auth key](./images/generate-auth-key.png)
5. Copy the key that it gives you. It looks something like `tskey-h1M24bEnVnd-n8J2LteLAFJLm8HQn3m`. (This is a fake key, don't bother trying it.)
![copy auth key](./images/copy-auth-key.png)
6. Configure this starter, and put in the key as `TAILSCALE_AUTHKEY`.
7. Wait for it to finish deploying, and go to [the admin page](https://login.tailscale.com/admin/machines).
8. Where it says `railway-app`, click on the triple dots.
![click triple dots](./images/click-triple-dots.png)
9. Then, click **Edit route settings...**. Then, turn on the option that says **Use as exit node**.
![use as exit node](./images/use-as-exit-node.png)
10. Configure your computer to use the exit node, and you're done!