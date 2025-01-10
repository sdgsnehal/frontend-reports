import "./App.css";
import { Linechart } from "./components/charts/Linecharts/Linechart";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      <Sidebar />
      <div className="w-full h-full p-4">
        <div className="w-full grid gap-4 grid-cols-1 md:grid-cols-2">
          <div className="w-full h-[350px]">
            <Linechart title="Total Sales" />
          </div>
          <div className="w-full h-[350px]">
            <Linechart title="Total Profit" />
          </div>
          <div className="w-full h-[350px]">
            <Linechart title="Total Order" />
          </div>
          <div className="w-full h-[350px]">
            <Linechart title="Average Order Value" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
