import Aside from "./components/Aside";
import Header from "./components/Header";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <>
      <div id="header" className="w-full">
        <Header />
      </div>

      <main className="flex h-screen w-full">
        <div className="basis-1/3 lg:basis-1/4 xl:basis-1/5">
          <Aside />
        </div>
        <Separator orientation="vertical" />
        <div id="content" className="basis-2/3 lg:basis-3/4 xl:basis-4/5">
        
          
        
        </div>
      </main>
    </>
  );
}

export default App;
