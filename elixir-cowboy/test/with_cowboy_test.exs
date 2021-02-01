defmodule WithCowboyTest do
  use ExUnit.Case
  doctest WithCowboy

  test "greets the world" do
    assert WithCowboy.hello() == :world
  end
end
