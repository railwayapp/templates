defmodule RailwayPhoenix.Repo do
  use Ecto.Repo,
    otp_app: :railway_phoenix,
    adapter: Ecto.Adapters.Postgres
end
