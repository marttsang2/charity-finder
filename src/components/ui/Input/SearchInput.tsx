import React from 'react'
import { causeList } from '../../../constants/causes'
import { useNavigate } from 'react-router-dom'

type SearchInputProps = {
    value: string
    setValue: React.Dispatch<React.SetStateAction<string>>
}

const SearchInput: React.FC<SearchInputProps> = ({ value, setValue }) => {
  const navigate = useNavigate();
  const [searchList, setSearchList] = React.useState<string[]>(causeList.causes)

  React.useEffect(() => {
    const filteredList = causeList.causes.filter((cause) => {
      return cause.toLowerCase().includes(value.toLowerCase())
    })
    setSearchList(filteredList)
  }, [value])

  const navigateToSearch = (keyword: string) => {
    setSearchList([])
    setValue("")
    navigate(`/search/${keyword}`)
  }

  return (
    <div className='relative w-1/2'>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder='Search...'
        className='w-full h-10 border-2 border-gray-300 rounded-md px-2'
    />
    <div>
      {
        searchList.length > 0 && value.length > 0 &&
        <ul className='absolute top-14 left-0 w-full bg-white border-2 border-gray-300 rounded-md max-h-40 overflow-auto'>
          {
            searchList.map((item) => (
              <li key={item} className='px-2 py-1 hover:bg-gray-200' onClick={() => navigateToSearch(item)}>{item}</li>
            ))
          }
        </ul>
      }
    </div>
    </div>
  )
}

export default SearchInput