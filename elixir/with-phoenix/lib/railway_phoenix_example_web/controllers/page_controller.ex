defmodule RailwayPhoenixExampleWeb.PageController do
  use RailwayPhoenixExampleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
