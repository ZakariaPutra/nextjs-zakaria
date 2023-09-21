import React from 'react';
import { RxAvatar } from "react-icons/rx";

function Suggest() {
    const arraySuggestions = [
        { id: 1, name: 'kenmad3', status: 'your friend', profileUrl: 'https://placekitten.com/408/287' },
        { id: 2, name: 'rahman_teja', status: 'your friend', profileUrl: 'https://placekitten.com/408/287' },
        { id: 3, name: 'rifqidainur', status: 'your friend', profileUrl: 'https://placekitten.com/408/287' },
        { id: 4, name: 'hitammalika', status: 'your friend', profileUrl: 'https://placekitten.com/408/287' },
        { id: 5, name: 'shizakireinaa', status: 'your friend', profileUrl: 'https://placekitten.com/408/287' },
      ];

      return (
        <div className='flex flex-col px-10 py-10 bg-black'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <img src='/assets/images/Lenin.jpg' className='h-12 w-12 rounded-full' />
              <div className='flex flex-col pr-6 pl-3'>
                <span className='text-white font-semibold'>Lennin_Senpai</span>
                <span className='text-gray-400 font-thin'>Vladimir Lenin</span>
              </div>
            </div>
            <span className='text-blue-500 cursor-pointer text-right text-sm'>Switch</span>
          </div>
          <div className='flex text-sm mt-5 items-center justify-between'>
            <span className='text-gray-400'>Suggested for you</span>
            <span className='text-white cursor-pointer hover:text-gray-600 text-right'>See All</span>
          </div>
          <div className="flex flex-col mt-3 space-y-4">
            {arraySuggestions.map((val) => (
              <div className='flex items-center justify-between'>
                <div className="flex items-center">
                  <img src={val.profileUrl} className="w-12 h-12 rounded-full object-cover" />
                  <div className="flex flex-col ml-2">
                    <span className="font-light text-base text-white">{val.name}</span>
                    <span className="text-gray-500 text-sm">Followed by {val.status}</span>
                  </div>
                </div>
                <button className="text-blue-500 text-sm cursor-pointer hover:text-white">Follow</button>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    export default Suggest;


