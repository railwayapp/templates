defmodule WithCowboy.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  alias WithCowboy.Endpoint

  @impl true
  def start(_type, _args) do
    children = [
      # Starts a worker by calling: WithCowboy.Worker.start_link(arg)
      # {WithCowboy.Worker, arg}
      Endpoint
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [
      strategy: :one_for_one,
      name: WithCowboy.Supervisor
    ]
    Supervisor.start_link(children, opts)
  end
end
