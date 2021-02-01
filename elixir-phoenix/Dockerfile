FROM bitwalker/alpine-elixir-phoenix:latest

ENV MIX_ENV=prod

# Install deps
RUN mix do deps.get, deps.compile
RUN cd assets && \
    npm install

# Run frontend build, compile, and digest assets
RUN cd assets/ && \
    npm run deploy && \
    cd - && \
    mix do compile, phx.digest

CMD ["mix", "phx.server"]
