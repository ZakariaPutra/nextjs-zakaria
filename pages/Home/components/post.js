import React from 'react';
import { FiMoreHorizontal } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";
import { PiTelegramLogoLight } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";

function Post({ user, postImage, likes, timestamp}) {
    return (
        <div className='w-full mt-7 mr-10 mb-12 ml-10'>
            <div className='flex justify-between items-center mb-2'>
                <div className='flex text-white items-center font-bold'>
                    <img src='https://placekitten.com/200/287' className='w-8 h-8 rounded-full' style={{marginRight : "10px"}}></img>{" "}
                    {user} • <span className='text-gray-500 text-sm'>{timestamp}</span>
                </div>
                <FiMoreHorizontal />
            </div>
            <div className='rounded-md border-slate-500 w-4/5 no-scrollbar'>
                <img src={postImage} alt="width-full rounded-md border-slate-500" />
            </div>
            <div className='text-white no-scrollbar'>
                <div className='flex items-center justify-between text-white w-3/4'>
                    <div className='flex'>
                        <MdFavoriteBorder className='cursor-pointer'/>
                        <HiOutlineChatBubbleLeftEllipsis className='cursor-pointer'/>
                        <PiTelegramLogoLight className='cursor-pointer'/>
                    </div>
                    <div className='flex'>
                        <MdBookmarkBorder className='cursor-pointer'/>
                    </div>
                </div>
                <span className='text-white'>Liked by {likes} people.</span>
            </div>
        </div>
    );
}

export default Post;