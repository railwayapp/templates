use Mix.Config

config :with_cowboy, WithCowboy.Endpoint, port: String.to_integer(System.get_env("PORT") || "4000")
config :with_cowboy, redirect_url: "http://localhost:4000/api"

# import_config "#{Mix.env()}.exs"
