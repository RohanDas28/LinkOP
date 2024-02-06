import { FaInstagram, FaXTwitter, FaLinkedinIn, FaSnapchat, FaMeta, FaYoutube, FaGithub, FaTelegram, FaRedditAlien, FaTwitch, FaDev, } from "react-icons/fa6";

function App() {

  return (
    <>
      <div>
        <img className="h-36" src="https://rohandas28.github.io/avatar.png" />
        <h1>Rohan Das</h1>
        <h2>Passionate Developer With Imagination</h2>
      </div>
      <div className="text-5xl">
        <span> <FaInstagram /> </span>
        <span> <FaXTwitter /> </span>
        <span> <FaLinkedinIn /> </span>
        <span> <FaSnapchat /> </span>
        <span> <FaMeta /> </span>
        <span> <FaYoutube /> </span>
        <span> <FaGithub /> </span>
        <span> <FaTelegram /> </span>
        <span> <FaRedditAlien /> </span>
        <span> <FaTwitch /> </span>
        <span> <FaDev /> </span>
      </div>
    </>
  )
}

export default App
