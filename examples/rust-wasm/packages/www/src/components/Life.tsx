import { Cell, Universe } from "crate";
import { memory } from "crate/pkg/crate_bg.wasm";
import React, { useEffect, useRef, useState } from "react";
import { Play, Pause, RefreshCw } from "react-feather";
import tw from "twin.macro";
import { Link } from "./Link";

const CELL_SIZE = 10; // px
const GRID_COLOR = "#CCCCCC";
const DEAD_COLOR = "#FFFFFF";
const ALIVE_COLOR = "#000000";

const Life: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const universeRef = useRef(Universe.new());
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (canvas == null || ctx == null) return;

    const universe = universeRef.current;
    const width = universe.width();
    const height = universe.height();

    canvas.height = (CELL_SIZE + 1) * height + 1;
    canvas.width = (CELL_SIZE + 1) * width + 1;

    const drawGrid = () => {
      ctx.beginPath();
      ctx.strokeStyle = GRID_COLOR;

      // Vertical lines.
      for (let i = 0; i <= width; i++) {
        ctx.moveTo(i * (CELL_SIZE + 1) + 1, 0);
        ctx.lineTo(i * (CELL_SIZE + 1) + 1, (CELL_SIZE + 1) * height + 1);
      }

      // Horizontal lines.
      for (let j = 0; j <= height; j++) {
        ctx.moveTo(0, j * (CELL_SIZE + 1) + 1);
        ctx.lineTo((CELL_SIZE + 1) * width + 1, j * (CELL_SIZE + 1) + 1);
      }

      ctx.stroke();
    };

    const getIndex = (row: number, column: number) => {
      return row * width + column;
    };

    const drawCells = () => {
      const cellsPtr = universe.cells();
      const cells = new Uint8Array(memory.buffer, cellsPtr, width * height);

      ctx.beginPath();

      for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
          const idx = getIndex(row, col);

          ctx.fillStyle = cells[idx] === Cell.Dead ? DEAD_COLOR : ALIVE_COLOR;

          ctx.fillRect(
            col * (CELL_SIZE + 1) + 1,
            row * (CELL_SIZE + 1) + 1,
            CELL_SIZE,
            CELL_SIZE,
          );
        }
      }

      ctx.stroke();
    };

    let animationId: number | null = null;

    const renderLoop = () => {
      if (!isPaused) {
        universe.tick();
      }

      drawGrid();
      drawCells();

      animationId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      if (animationId != null) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  return (
    <div tw="leading-none">
      <div tw="mb-4">
        <div tw="space-y-4 mb-4">
          <h1 tw="font-bold text-4xl">Game of Life</h1>
          <p>
            Implemented in Rust based off the{" "}
            <Link
              href="https://rustwasm.github.io/book/game-of-life/introduction.html"
              tw="text-pink-600 underline hover:text-pink-500"
            >
              Wasm Game of Life tutorial
            </Link>
          </p>
        </div>

        <div tw="flex space-x-4 mt-4">
          <button
            onClick={() => setIsPaused(!isPaused)}
            css={[tw`focus:outline-none focus:ring ring-pink-500 rounded-sm`]}
          >
            {isPaused ? <Play /> : <Pause />}
          </button>

          <button
            onClick={() => {
              universeRef?.current.restart();
            }}
            css={[tw`focus:outline-none focus:ring ring-pink-500 rounded-sm`]}
          >
            <RefreshCw />
          </button>
        </div>
      </div>

      <canvas ref={canvasRef} />
    </div>
  );
};

export default Life;
