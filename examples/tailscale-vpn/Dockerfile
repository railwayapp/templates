FROM alpine:latest

RUN apk update \
    && apk add curl openrc \
    && rm -rf /var/cache/apk/*

RUN curl -fsSL https://tailscale.com/install.sh | sh

COPY . .

# Run on container startup.
RUN chmod +x /app/start.sh
CMD ["/app/start.sh"]
