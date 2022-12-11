import { useState } from "react";
import elapse from "./utils/compute";
import {FaYoutube, FaGithub,FaInstagram} from 'react-icons/fa'

function App() {
  // const [message, setMessage] = useState(null);
  const [playlist, setPlaylist] = useState("");
  const [apidata, setApiData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://yt-playlist-length.up.railway.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ playlist }),
    })
      .then((res) => res.json())
      .then((data) => setApiData(data));
  };

  return (
    <div className="bg-gray-700 h-screen">
      <header className="w-full bg-black/50 px-4 py-4 flex items-center justify-between lg:justify-center lg:space-x-20">
        <h1 className="text-xl text-white/70 font-sans">Youtube Playlist Length Calculator</h1>
        <FaYoutube className="hover:animate-spin duration-200 ease-in-out" color="red" size={40} />
      </header>

      <div className="px-4">
        <div className="pt-28 mx-auto max-w-3xl">
          <form
            onSubmit={handleSubmit}
            className="flex space-x-2"
            action="/"
            method="POST"
          >
          
            <input
            
              placeholder="Enter youtube playlist link"
              className="flex-1 w-full  focus:ring-2 ring-red-500 focus:outline-none  rounded px-4 py-2"
              value={playlist}
              onChange={(e) => setPlaylist(e.target.value)}
            ></input>

            <button
            disabled={!playlist}
              type="submit"
              className="bg-red-500 rounded hover:bg-red-700 text-white px-4 py-2 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Send
            </button>
          </form>
          <p className="text-white/40 text-sm mt-1">Make sure the playlist is public</p>
          {apidata && (
            <div className="bg-white h-fit rounded mt-24 p-4 w-full">
              <div className="flex items-center space-x-2 flex-col md:flex-row ">
                <h1 className="font-semibold">The length of the playlist is</h1>
                <h1 id="result">
                  <span className="text-xl text-red-500 font-bold">
                    {" "}
                    {apidata.duration.hours}{" "}
                  </span>
                  Hours
                  <span className="text-xl text-red-500 font-bold">
                    {" "}
                    {apidata.duration.minutes}{" "}
                  </span>
                  Minutes
                  <span className="text-xl text-red-500 font-bold">
                    {" "}
                    {apidata.duration.seconds}{" "}
                  </span>
                  Seconds
                </h1>
              </div>

              <div className="mt-4">
                <h1>
                  Total No of Videos ={" "}
                  <span className="text-xl text-red-500 font-bold">
                    {apidata.videosCount}
                  </span>
                </h1>

                <div className="w-full bg-red-100 mt-5 p-4 rounded-md">
                  <h1>
                    At 1.5x Speed :
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 1.5).hours}{" "}
                    </span>
                    Hours
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 1.5).minutes}{" "}
                    </span>
                    Minutes
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 1.5).seconds}{" "}
                    </span>
                    Seconds
                  </h1>

                  <h1>
                    At 1.75x Speed :
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 1.75).hours}{" "}
                    </span>
                    Hours
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 1.75).minutes}{" "}
                    </span>
                    Minutes
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 1.75).seconds}{" "}
                    </span>
                    Seconds
                  </h1>

                  <h1>
                    At 2x Speed :
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 2).hours}{" "}
                    </span>
                    Hours
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 2).minutes}{" "}
                    </span>
                    Minutes
                    <span className="text-xl text-red-500 font-bold">
                      {" "}
                      {elapse(apidata.durationInSeconds, 2).seconds}{" "}
                    </span>
                    Seconds
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <footer className="absolute bottom-0  w-full bg-black/50 px-4 py-4 flex items-center justify-between lg:justify-center lg:space-x-20">
            <h1 className="text-white/60 font-normal text-lg"> Made By Yuvraj Singh</h1>
            <div className="flex space-x-4">
              <a className="hover:scale-105 duration-300 ease-in-out"  href="https://github.com/Blurry-Brush"> <FaGithub color="#472183" size={30} /> </a>
              <a className="hover:scale-105 duration-300 ease-in-out" href="https://www.instagram.com/yuwuxj/"> <FaInstagram color="#CB1C8D" size={30} /> </a>
            </div>
      </footer>
    </div>
  );
}

export default App;
