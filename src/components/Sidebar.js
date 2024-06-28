/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { MdHomeFilled, MdOutlineSlowMotionVideo, MdSubscriptions, MdOutlineVideoLibrary, MdHistory, MdOutlineWatchLater } from 'react-icons/md'
import { LuThumbsUp } from 'react-icons/lu'

const Sidebar = () => {
    const mainLinks = [
        {
            icon: <MdHomeFilled className="text-xl"/>,
            lName: 'Home'
        },
        {
            icon: <MdOutlineSlowMotionVideo className="text-xl"/>,
            lName: 'Shorts'
        },
        {
            icon: <MdSubscriptions className="text-xl"/>,
            lName: 'Subscriptions'
        },
    ];
    const otherLinks = [
        {
            icon: <MdOutlineVideoLibrary className="text-xl"/>,
            lName: 'Library'
        },
        {
            icon: <MdHistory className="text-xl"/>,
            lName: 'History'
        },
        {
            icon: <MdOutlineWatchLater className="text-xl"/>,
            lName: 'Watch Later'
        },
        {
            icon: <LuThumbsUp className="text-xl"/>,
            lName: 'Liked Videos'
        },
    ];
  return (
    <div className='w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen'>
      <ul className='flex flex-col'>
        {mainLinks.map(
            ({icon, lName}) => {
                return <li key={lName} className={`pl-6 py-3 hover:bg-zinc-600 ${lName === "Home" ? "bg-zinc-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-start gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{lName}</span>
                    </a>
                </li>
            }
        )}
      </ul>
      <ul className='flex flex-col'>
        {otherLinks.map(
            ({icon, lName}) => {
                return <li key={lName} className={`pl-6 py-3 hover:bg-zinc-600 ${lName === "Home" ? "bg-zinc-600" : " "} rounded-xl`}>
                    <a href='#' className='flex items-start gap-5'>
                        {icon}
                        <span className='text-sm tracking-wider'>{lName}</span>
                    </a>
                </li>
            }
        )}
      </ul>
    </div>
  )
}

export default Sidebar
