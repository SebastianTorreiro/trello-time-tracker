import { Avatar } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { FolderKanban } from "lucide-react";
const Aside = () => {
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
        <div id="title" className="flex gap-2 p-4">
          <FolderKanban />
          <h2>Tableros</h2>
        </div> 

          <div id="board-container">
            <div>
              <h3>Tablero 1</h3>
            </div>

            <div>
              <h3>Tablero 2</h3>
            </div>
          </div>
        </div>
    </aside>
  );
};

export default Aside;
