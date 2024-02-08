import { FaInstagram, FaXTwitter, FaLinkedinIn, FaSnapchat, FaMeta, FaYoutube, FaGithub, FaTelegram, FaRedditAlien, FaTwitch, FaDev, } from "react-icons/fa6";
import AnimatedCursor from "react-animated-cursor"
import 'animate.css';


function App() {

  return (
    <>
      <AnimatedCursor
        color="255, 255, 255"
        innerSize={8}
        outerSize={8}
        hasBlendMode={true} />
      <div className="bg-gradient-to-t from-gray-900 to-blue-950 min-h-screen flex flex-col gap-1 justify-center items-center select-none">
        <div id="card" className="bg-gradient-to-t from-gray-950/80 to-blue-900/80  py-2 px-8 md:px-16 rounded-xl m-4 shadow-xl animate__animated animate__fadeInDown ">
          <div className="flex items-center justify-center text-white font-semibold text-xl gap-2 mb-4 border-b-2 border-slate-300 animate__animated animate__zoomIn">
            <a href="/"><img className="h-32 object-contain mb-2 hover:scale-105 transition-all" src="https://rohandas28.github.io/avatar.png" /></a>
            <div className="flex flex-col justify-start">
              <h1 className="text-md md:text-3xl hover:scale-105 transition-all">&lt;Rohan Das/&gt;</h1>
              <h2 className="text-sm md:text-xl text-gray-300 hover:scale-105 transition-all">Passionate Developer With Imagination</h2>
            </div>
          </div>
          <div className="text-3xl text-white font-semibold animate__animated animate__zoomIn">
            <a href="https://www.instagram.com/RohanDas28" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-pink-700 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaInstagram className="mr-2" />Instagram
            </a>
            <a href="https://twitter.com/RohanDasRD" target="_blank" rel="noopener noreferrer" className="bg-black px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaXTwitter className="mr-2" />Twitter
            </a>
            <a href="https://www.linkedin.com/RohanDas28" target="_blank" rel="noopener noreferrer" className="bg-blue-900 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaLinkedinIn className="mr-2" />LinkedIn
            </a>
            <a href="https://www.snapchat.com/RohanDasRD" target="_blank" rel="noopener noreferrer" className="bg-yellow-300 text-black px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaSnapchat className="mr-2" />Snapchat
            </a>
            {/* I dont use Facebook :)
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaMeta className="mr-2" />Facebook
            </a> */}
            <a href="https://www.youtube.com/CorvusOfficial" target="_blank" rel="noopener noreferrer" className="bg-red-500 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaYoutube className="mr-2" />YouTube
            </a>
            <a href="https://github.com/RohanDas28" target="_blank" rel="noopener noreferrer" className="bg-slate-600 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaGithub className="mr-2" />GitHub
            </a>
            <a href="https://telegram.me/rohandas28" target="_blank" rel="noopener noreferrer" className="bg-blue-400 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaTelegram className="mr-2" />Telegram
            </a>
            <a href="https://www.reddit.com/RohanDas28" target="_blank" rel="noopener noreferrer" className="bg-orange-500 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaRedditAlien className="mr-2" />Reddit
            </a>
            <a href="https://www.twitch.tv/thecorvus28" target="_blank" rel="noopener noreferrer" className="bg-purple-500 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaTwitch className="mr-2" />Twitch
            </a>
            <a href="https://dev.to/RohanDas28" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full">
              <FaDev className="mr-2" />Dev.to
            </a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
