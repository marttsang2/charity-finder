import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Nonprofit } from '../../api/charity/type';
import { IoArrowBack, IoHeart, IoHeartOutline, IoLink, IoLocationSharp } from 'react-icons/io5';

const CharityDetailPage = () => {
  const { state } = useLocation() as unknown as { state: Nonprofit };
  const [charityList, setCharityList] = React.useState<Nonprofit[]>([]);

  useEffect(() => {
    const items = localStorage.getItem('charityList');
    if (items) {
      setCharityList(JSON.parse(items));
    }
  }, []);

  const toggleToFavorite = () => {
    if (charityList.map((charity) => charity.profileUrl).includes(state.profileUrl)) {
      setCharityList(charityList.filter((charity: Nonprofit) => charity.profileUrl !== state.profileUrl))
      localStorage.setItem('charityList', JSON.stringify(charityList.filter((charity: Nonprofit) => charity.profileUrl !== state.profileUrl)))
    } else {
      setCharityList([...charityList, state])
      localStorage.setItem('charityList', JSON.stringify([...charityList, state]))
    }
  }

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <Link to="/" className='flex items-center gap-2 mb-4'>
        <IoArrowBack size={20} />
        <p className=''>Back</p>
      </Link>
      {state.coverImageUrl && <img src={state.coverImageUrl} alt="cover image" className='w-full h-80 object-cover rounded-lg'/>}
      <div className='flex flex-col gap-4 my-6'>
        <div className='flex items-center justify-between gap-2'>
          <h1 className='text-xl font-semibold'>{state.name}</h1>
          <div className='flex items-center gap-2'>
            <button type='button' onClick={toggleToFavorite}>
            {
              charityList.map((charity) => charity.profileUrl).includes(state.profileUrl) ?
              <IoHeart size={24} />
              :
              <IoHeartOutline size={24} />
            }
            </button>
            <a href={state.profileUrl} target="_blank">
              <IoLink size={24} />
            </a>
            </div>
        </div>
        {
        state.location &&
        <div className='flex items-center gap-2'>
          <IoLocationSharp />
          <p>{state.location}</p>
        </div>
        }
        <div className='flex items-center gap-2'>
          {
            state?.tags?.map((tag) => (
              <p className='bg-sky-100 px-3 py-1 rounded-full text-sm text-sky-600'>{tag}</p>
            ))
          }
        </div>
        <p className='text-sm text-gray-600'>{state.description}</p>
      </div>
    </div>
  )
}

export default CharityDetailPage