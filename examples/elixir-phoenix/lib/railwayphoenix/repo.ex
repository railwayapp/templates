defmodule Railwayphoenix.Repo do
  use Ecto.Repo,
    otp_app: :railwayphoenix,
    adapter: Ecto.Adapters.Postgres
end
