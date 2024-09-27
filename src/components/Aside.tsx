import { useState } from "react";
import BoardOptions from "./BoardOptions";
import BoardWrapper from "./BoardWrapper";
import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Ellipsis, FolderKanban, Plus } from "lucide-react";
const Aside = () => {
  // let [setBoards, boards] = useState([
  //   { name: "tablero 1", id: 1 },
  //   { name: "tablero 2", id: 2 },
  // ]);

  const boards = [
    { name: "Tablero 1", id: 1 },
    { name: "Tablero 2", id: 2 },
  ];
  const name: string = "Sebastian Torreiro";
  return (
    <aside id="aside" className="w-full bg-muted h-screen ">
      <div id="name" className="flex items-center pl-4">
        <Avatar>
          <div className="w-full h-full bg-foreground text-background flex items-center justify-center font-medium text-2xl ">
            {name[0].toUpperCase()}
          </div>
        </Avatar>
        <div className="p-4">
          <h2 className="text-xl font-bold">{name}</h2>
          <span className="text-xs italic">Gratis</span>
        </div>
      </div>

      <Separator />

      <div id="boards">
        <div id="title" className="p-4">
          <BoardWrapper id="board-title">
            <div className="flex gap-1">
              <FolderKanban />
              <h2 className="font-medium">Tableros</h2>
            </div>

            <BoardOptions>
              <Plus />
            </BoardOptions>
          </BoardWrapper>
        </div>

        <div className="w-3/4 pl-4">
          <Separator />
        </div>

        <div id="board-container" className="py-4 flex flex-col ">
          {boards
            ? boards.map((board) => (
                <div key={board.id} className="px-4 py-1 hover:bg-muted-foreground">
                  <BoardWrapper  id={`board-${board.name}`}>
                    <h3 >{board.name}</h3>
                    <BoardOptions>
                      <Ellipsis />
                    </BoardOptions>
                  </BoardWrapper>
                </div>
              ))
            : ""}
        </div>
      </div>
    </aside>
  );
};

export default Aside;
