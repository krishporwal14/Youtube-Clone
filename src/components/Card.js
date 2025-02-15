/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    console.log(data);
  return (
    <div className='w-64 h-60 flex gap-3 flex-col'>
        <div className='relative'> 
                <span className='absolute bottom-3 right-3 text-sm bg-gray-900 py-0.5 px-2 z-10'>{data.videoDuration}</span>
                <Link to = {`/watch/${data.videoId}`}>
                    <img src={data.videoThumbnail} alt='Thumbnail' className='h-44 w-72'/>
                </Link>
        </div>
        <div className='flex gap-2'>
            <div className='min-w-fit'>
                <a href='#'><img src={data.channelInfo.image} alt='Channel Image' className='h-9 w-9 rounded-full'/></a>
            </div>
            <div>
                <h3>
                    <a href='#' className='line-clamp-2'>
                        {data.videoTitle}
                    </a>
                </h3>
                <div className='text-sm text-gray-400'>
                    <div>
                        <span className='pr-2'>
                            {data.videoViews} views
                        </span>
                        <span>
                            {data.videoAge}
                        </span>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Card
