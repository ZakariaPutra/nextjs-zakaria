import Head from "next/head";
import Sidenav from "./components/sidenav.js";
import Story from "./components/story";
import Suggest from "./components/suggestions";
import Timeline from "./components/timeline.js";

export default function Home(req, res, next) {
  return (
    <div className="flex bg-black h-screen w-screen" >
      <div className="flex" style={{ flex: 0.5 }}>
        <Sidenav />
      </div>
      <div className="flex flex-col w-full bg-black" style={{width: 738}}>
        <div className="px-12" style={{}}>
          <Story />
        </div>
        <div className="flex flex-1 overflow-y-scroll no-scrollbar px-3 bg-black" >
          <Timeline />
        </div>
      </div>
      <div className="bg-black" style={{ flex: 1.25 }}>
        <Suggest />
      </div>
    </div>
  );
}
