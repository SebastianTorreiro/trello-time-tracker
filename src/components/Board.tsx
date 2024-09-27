import type { Board } from "@/types";

type Props = {
  board: Board;
};
const Board = ({ board }: Props) => {
  return (
    <>
      <div id="board-header">
        <h2>{board.title}</h2>
      </div>

      <div id="board-content">

      </div>
    </>
  );
};

export default Board;
