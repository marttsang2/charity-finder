import React, { useEffect } from 'react'
import { searchCharityList } from './api/charity/charity'
import { Nonprofit } from './api/charity/type'
import Card from './components/ui/Card/Card'
import { Link, Outlet } from 'react-router-dom'
import { causeList } from './constants/causes'

function App() {
  const [loading, setLoading] = React.useState<boolean>(false)
  const [charityList, setCharityList] = React.useState<Nonprofit[]>([])

  const getCharityList = async () => {
    setLoading(true)
    const randomIndex = Math.floor(Math.random() * causeList.causes.length);
    const res = await searchCharityList(causeList.causes[randomIndex])
    if (res.nonprofits.length > 0) {
      setCharityList(res.nonprofits)
    }
    setLoading(false)
  }

  useEffect(() => {
    getCharityList()
  },[])

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <div className='relative'>
        <img src="/hero.jpg" alt="hero" className='w-full h-80 object-cover rounded-lg mb-4 brightness-75'/>
        <p className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl font-bold whitespace-nowrap tracking-wide'>Changing The World Through Kindness</p>
      </div>
      <p className='text-3xl text-center font-bold mb-4'>You May Interest</p>
      {
        loading && <p>Loading...</p>
      }
      {!loading && <div className='grid grid-cols-3 gap-4'>
        {charityList.map((charity: Nonprofit) => (
          <Link to="/charity/:keyword" state={charity}>
          <Card 
            key={charity.profileUrl}
            title={charity.name}
            description={charity.description}
            logoUrl={charity?.logoUrl}
            location={charity.location}
          />
          </Link>
        ))}
      </div>}
      <Outlet />
    </div>
  )
}

export default App
