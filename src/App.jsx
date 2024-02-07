import { FaInstagram, FaXTwitter, FaLinkedinIn, FaSnapchat, FaMeta, FaYoutube, FaGithub, FaTelegram, FaRedditAlien, FaTwitch, FaDev, } from "react-icons/fa6";

function App() {

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col gap-1 justify-center items-center">
        <div id="card" className="bg-gray-700/80  py-2 px-8 md:px-16 rounded-xl m-4">
          <div className="flex flex-col text-center items-center justify-center text-white font-semibold text-xl mb-4 border-b-2 border-slate-300">
            <img className="h-56 cursor-pointer" src="https://rohandas28.github.io/avatar.png" />
            <h1 className="text-3xl">Rohan Das</h1>
            <h2 className="text-xl pb-2">Passionate Developer With Imagination</h2>
          </div>
          <div className="text-3xl text-white font-semibold">
            <span className="bg-gradient-to-r from-pink-500 to-pink-700 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaInstagram className="mr-2" />Instagram </span>
            <span className="bg-black px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaXTwitter className="mr-2" />Twitter </span>
            <span className="bg-blue-900 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaLinkedinIn className="mr-2" />LinkedIn </span>
            <span className="bg-yellow-300 text-black px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaSnapchat className="mr-2" />Snapchat </span>
            <span className="bg-blue-600 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaMeta className="mr-2" />Facebook </span>
            <span className="bg-red-500 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaYoutube className="mr-2" />YouTube </span>
            <span className="bg-slate-800 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaGithub className="mr-2" />GitHub </span>
            <span className="bg-blue-400 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaTelegram className="mr-2" />Telegram </span>
            <span className="bg-orange-500 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaRedditAlien className="mr-2" />Reddit </span>
            <span className="bg-purple-500 px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaTwitch className="mr-2" />Twitch </span>
            <span className="bg-white text-black px-2 py-2 m-2 flex justify-center items-center cursor-pointer hover:scale-110 transition-all rounded-full"> <FaDev className="mr-2" />Dev.to </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
