import React from 'react'
import { IoHeartCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import SearchInput from '../ui/Input/SearchInput';

const Header = () => {
  const [searchKeyword, setSearchKeyword] = React.useState<string>('')
  
  return (
    <div className='max-w-full flex justify-between items-center px-4 h-16 bg-white'>
        <div className='flex item-center gap-2'>
          <img src="/app-logo.png" alt="logo" width={32} height={32} />
          <a href="/" className='text-2xl font-bold'>Charity Finder</a>
        </div>
        <SearchInput
          value={searchKeyword}
          setValue={setSearchKeyword}
        />
        <Link to="/favorites">
            <IoHeartCircle size={36} className='text-red-600' />
        </Link>
    </div>
  )
}

export default Header