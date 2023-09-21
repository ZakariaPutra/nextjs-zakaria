import Head from "next/head";
import Dropdown from "../components/Dropdown/index";
import { useRouter } from "next/router";


export default function Home(req, res, next) {
  const router = useRouter();
  const handleButtonClick = () =>{
    router.push('/Home');
  };
  return (
    <div>
      <Head>
        <title>Hitlergram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex bg-white ">
        <div style={{ flex: 0.25 }} />
        <div className="flex-1">
          <div className="flex-1 flex py-8 place-content-center">
            <div className="flex-1">
              <img src="/assets/images/home-phones.png" />
            </div>
            <div className="flex-1 flex flex-col">
              <div className="flex-1 border p-4 flex flex-col justify-evenly items-center">
                <img src="/assets/images/instagram.png" className="h-20 w-48" />
                <img
                  src="/assets/images/Lenin.jpg"
                  className="w-20 h-20 rounded-full"
                />
                <button className="bg-blue-400 hover:bg-blue-500 px-4 py-2 rounded-lg text-white font-bold cursor-pointer" onClick={handleButtonClick}>
                  continue as Me
                </button>
                <div className="text-blue-400 hover:text-black font-bold cursor-pointer">
                  Remove Account
                </div>
              </div>
              <div className="flex flex-col items-center font-sans border p-4 py-4 mt-5">
                <div>Not Me?</div>
                <div>
                  <a className="text-blue-500 font-bold hover:text-blue-600 cursor-pointer">
                    Switch Account
                  </a>{" "}
                  or{" "}
                  <a className="text-blue-500 font-bold  hover:text-blue-600 cursor-pointer">
                    Sign Up
                  </a>
                </div>
              </div>
              <div className="flex flex-col items-center py-6">
                <div className="font-sans py-6">Get the app.</div>
                <div className="flex flex-row justify-evenly items-center">
                  <div className="flex justify-items-center cursor-pointer pr-4">
                    <img
                      src="/assets/images/playstore.png"
                      className="h-12 w-auto"
                    />
                  </div>
                  <div className="flex justify-items-center cursor-pointer">
                    <img
                      src="/assets/images/microsoft.png"
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.25 }} />
      </div>
      <div className="flex-1 flex space-x-4 place-content-center text-xs font-light pb-0">
        <span>Meta</span>
        <span>About</span>
        <span>Blog</span>
        <span>Jobs</span>
        <span>Help</span>
        <span>API</span>
        <span>Privacy</span>
        <span>Terms</span>
        <span>Top Accounts</span>
        <span>Locations</span>
        <span>Instagram Lite</span>
        <span>Threads</span>
        <span>Contact uploading and non-users</span>
        <span>Meta Verified</span>
      </div>
      <div className="flex flex-row w-screen justify-center font-sans text-xs font-light ">
        <Dropdown />
        <div className="">© 2023 Instagram from Meta</div>
      </div>
    </div>
  );
}
