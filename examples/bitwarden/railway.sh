
#!/bin/sh

export ROCKET_PORT="${PORT}"

if [ -z "${DOMAIN}" ]; then
  export DOMAIN="https://${RAILWAY_STATIC_URL}"
fi

if [ -z "${DATABASE_URL}" ]; then
  echo "There isn's a DATABASE_URL env var"
  exit 1
fi

/bin/sh /start.sh