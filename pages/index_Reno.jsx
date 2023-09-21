import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col bg-white">
        <div className="flex-1 flex px-24 py-48">
          <div className="flex-1">
            <img src="/assets/images/ig.png" className="object-contain" />
          </div>
          <div className="flex-1 flex flex-col">
            <div className="flex-1 flex flex-col border p-4 justify-evenly items-center">
              <div className="text-3xl font-bold">Instagram</div>
              <img
                src="/assets/images/hitler.jpeg"
                className="w-20 h-auto rounded-full"
              />
              <div 
                className="bg-blue-400 hover:bg-blue-500 p-2 rounded-lg text-white font-bold cursor-pointer">
                Continue as dreno.rinaldi
              </div>
              <div className="text-blue-400 hover:text-black font-semibold cursor-pointer">Remove Account</div>
            </div>
            <div>
              <div>Not dreno.rinaldi?</div>
              <div>Switch accounts or Sign Up</div>
            </div>
            <div>
              <div>Get the app.</div>
              <div className="flex">
                <div>AppStore</div>
                <div>Google Play</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-400">footer</div>
        <div className="bg-blue-500">copyright</div>
      </div>
    </div>
  );
}
