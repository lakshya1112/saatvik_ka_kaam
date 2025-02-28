import pp from "/src/assets/icons8-user-96.png";
import { useState } from "react";// components/Header.jsx
const Header = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [profileMenu, setProfileMenu] = useState(false);
  return (
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Alumni Portal</div>
          <nav className="space-x-4">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About Us</a>
            <a href="#events" className="hover:text-blue-600">Events</a>
            <a href="#careers" className="hover:text-blue-600">Career Paths</a>
            <a href="/directory" className="hover:text-blue-600">Directory</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          {loggedIn?(<button onClick={()=>setProfileMenu(!profileMenu)
          } className="bg-white text-black p-4 rounded-full"><img className="w-8 rounded-full border-2 border-black" src={pp}></img></button>):
          (<button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Login/Signup</button>)}
          {profileMenu && <div className="absolute bg-black/85 text-white align-text-bottom w-50 h-120 top-18 right-4 z-10">
            <ul className="profilemenu">
              <li><a href="#">Edit Profile</a></li>
              <li><a href="#">Dashboard</a></li>
              <li><a href="#">Sign Out</a></li>
              </ul></div>}
          </nav>
        </div>
      </header>
    );
  };
  
export default Header;