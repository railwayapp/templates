defmodule RailwayPhoenix.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      RailwayPhoenix.Repo,
      # Start the Telemetry supervisor
      RailwayPhoenixWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: RailwayPhoenix.PubSub},
      # Start the Endpoint (http/https)
      RailwayPhoenixWeb.Endpoint
      # Start a worker by calling: RailwayPhoenix.Worker.start_link(arg)
      # {RailwayPhoenix.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: RailwayPhoenix.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    RailwayPhoenixWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
