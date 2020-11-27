defmodule RailwayPhoenixExample.Repo do
  use Ecto.Repo,
    otp_app: :railway_phoenix_example,
    adapter: Ecto.Adapters.Postgres
end
