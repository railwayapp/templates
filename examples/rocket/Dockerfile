FROM rustlang/rust:nightly

ARG PORT

ENV ROCKET_ADDRESS=0.0.0.0
ENV ROCKET_ENV=staging

WORKDIR /app
COPY . .

RUN cargo build

CMD ROCKET_PORT=$PORT cargo run
