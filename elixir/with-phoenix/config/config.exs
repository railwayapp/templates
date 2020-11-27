# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :railway_phoenix_example,
  ecto_repos: [RailwayPhoenixExample.Repo]

# Configures the endpoint
config :railway_phoenix_example, RailwayPhoenixExampleWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "5XEOwc+4jOnQDDy239tygG/l6ILvecmxvfE89rH17JCP0zfPEIu9/Oz4/D/5v70T",
  render_errors: [view: RailwayPhoenixExampleWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: RailwayPhoenixExample.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
