/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const SearchCard = ({data}) => {
  return (
    <div className='flex gap-3'>
      <div className='relative'> 
                <span className='absolute bottom-3 right-3 text-sm bg-gray-900 py-0.5 px-2 z-10'>{data.videoDuration}</span>
                <Link to = {`/watch/${data.videoId}`}>
                  <img src={data.videoThumbnail} alt='Thumbnail' className='h-52 w-96'/>
                </Link>
        </div>
        <div className='flex flex-col gap-1'>
          <h3 className='max-w-2xl'>
            <a href='#' className='line-clamp-2'>
              {data.videoTitle}
            </a>
          </h3>
          <div className='text-xl text-gray-400'>
            <div>
              <div>
                <span className="after:contents-['*'] after:mx-1">
                  {data.videoViews} views
                </span>
                <span>
                  {data.videoAge}
                </span>
              </div>
            </div>
          </div>
          <div className='min-w-fit my-2'>
            <a href='#' className='flex items-center gap-2 text-xs text-gray-400'>
              <img src={data.channelInfo.image} alt='Channel' className='h-9 w-9 rounded-full'/>
              <span>{data.channelInfo.name}</span>
            </a>
          </div>
          <div>
            <div className='max-w-2xl line-clamp-2 text-sm text-gray-400'></div>
            <p>
              {data.videoDescription}
            </p>
          </div>
        </div>
    </div>
  )
}

export default SearchCard;
