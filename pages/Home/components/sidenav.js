import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import TelegramIcon from '@mui/icons-material/Telegram';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";


function Sidenav() {
  const arraySideMenu = [
    {id:1, name: 'Home', pic:<HomeIcon className='text-white' />},
    {id:2, name: 'Search', pic:<SearchIcon className='text-white' />},
    {id:3, name: 'Explore', pic:<ExploreIcon className='text-white' />},
    {id:4, name: 'Reels', pic:<SlideshowIcon className='text-white' />},
    {id:5, name: 'Messages', pic:<TelegramIcon className='text-white' />},
    {id:6, name: 'Notifications', pic:<FavoriteBorderIcon className='text-white' />},
    {id:7, name: 'Create', pic:<AddCircleOutlineIcon className='text-white' />},
    {id:8, name: 'Profile', pic:<Avatar> <img src="/assets/images/Lenin.jpg" className="w-20 h-20 rounded-full object-cover" /> </Avatar>}
]

return (
<div className="flex flex-1 flex-col justify-between border-r-2 border-gray-600 w-60">
      <img
        className="w-32 m-6"
        src="https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
        alt="Instagram Logo"
      />

      <div className="flex flex-1 flex-col">
      {arraySideMenu.map((val) => (
                    <button key={val.id} className="flex flex-1 items-center cursor-pointer hover:bg-neutral-800  my-1 mx-2 py-2 px-4 rounded-xl">
                      {val.pic}
                    <span className='text-slate-100 text-lg ml-2'>{val.name}</span>
                  </button>
                ))}
      </div>
      <div className="sidenav__more">
        <button className="flex flex-1 items-center cursor-pointer hover:bg-neutral-800 my-1 mx-2 py-2 px-4 rounded-xl">
          <MenuIcon className='text-white' />
          <span className='text-slate-100 text-lg ml-2'>More</span>
        </button>
      </div>
    </div>
  );
}

export default Sidenav;