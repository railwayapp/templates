FROM bitwalker/alpine-elixir-phoenix:latest

ARG DATABASE_URL
ARG SECRET_KEY_BASE

ENV MIX_ENV=prod

RUN mix local.hex --force
RUN mix local.rebar --force

ADD mix.exs mix.lock ./
RUN mix do deps.get, deps.compile

ADD assets/package.json assets/
RUN cd assets && \
  npm install

ADD . .

RUN cd assets/ && \
  npm run deploy && \
  cd - && \
  mix do compile, phx.digest

# Migrate the database
RUN mix ecto.migrate

CMD MIX_ENV=prod mix phx.server
