---
title: Bitwarden
description: A self-hosted cross-platform password manager
tags:
  - passwords
  - rust
  - postgress
---

# Bitwarden

This example implements [vaultwarden](https://github.com/dani-garcia/vaultwarden/wiki), a containered version of [Bitwarden](https://bitwarden.com) written in Rust.

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template?template=https%3A%2F%2Fgithub.com%2Frailwayapp%2Fexamples%2Ftree%2Fmaster%2Fexamples%2Fbitwarden&plugins=postgresql&envs=ADMIN_TOKEN%2CDOMAIN&ADMIN_TOKENDesc=Administration+Token+%28long+string+of+characters+and+super+secret%29&DOMAINDesc=The+domain+of+your+vault&DOMAINDefault=https%3A%2F%2F%24%7B%7B+RAILWAY_STATIC_URL+%7D%7D)

## ✨ Features

- End-to-End Encryption
- Cross-Platform Applications
- Multiple Users / Organizations with permissions
- Offline Sync
- Open Source

## ⚠️ Limitations

All changes made by the Admin Panel will be lost every time you re-deploy. Save critical configurations in your [Variables](https://github.com/dani-garcia/vaultwarden/blob/main/.env.template).
