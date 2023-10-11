import React from 'react'
import { IoLocationSharp } from 'react-icons/io5';

type CardProps = {
  logoUrl?: string;
  title: string;
  description: string;
  location?: string;
}

const Card: React.FC<CardProps> = ({ logoUrl, title, description, location }) => {
  return (
    <div className='rounded-xl shadow-lg hover:shadow-2xl p-4 flex flex-col gap-2 bg-white'>
      {logoUrl && <img src={logoUrl} alt='cover image' width={48} height={48} />}
      <p className='text-lg font-semibold'>{title}</p>
      {
      location &&
      <div className='flex items-center gap-2'>
        <IoLocationSharp />
        <p>{location}</p>
      </div>
      }
      <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

export default Card