import Head from "next/head";
import Sidenav from "./components/sidenav.js";
import Story from "./components/story";
import Suggest from "./components/suggestions";
import Timeline from "./components/timeline.js";

export default function Home(req, res, next) {
  return (
    <div className="flex bg-black h-screen" style={{maxWidth: 924.5}}>
      <div className="flex" style={{ flex: 1 }}>
        <Sidenav />
      </div>
      <div className="flex flex-col w-full ">
        <Story />
        <div className="overflow-y-scroll" style={{ flex: 1 }}>
          <Timeline />
        </div>
      </div>
      <div className="" style={{ flex: 1.25 }}>
        <Suggest />
      </div>
    </div>
  );
}
