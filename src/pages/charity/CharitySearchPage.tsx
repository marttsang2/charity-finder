import React, { useEffect } from 'react'
import { Nonprofit } from '../../api/charity/type'
import { searchCharityList } from '../../api/charity/charity'
import { Link, useParams } from 'react-router-dom'
import Card from '../../components/ui/Card/Card'

const CharitySearchPage = () => {
  const { keyword } = useParams();
  const [loading, setLoading] = React.useState<boolean>(false)
  const [charityList, setCharityList] = React.useState<Nonprofit[]>([])

  const getCharityList = async () => {
    setLoading(true)
    const res = await searchCharityList(keyword ?? "")
    if (res.nonprofits.length > 0) {
      setCharityList(res.nonprofits)
    }
    setLoading(false)
  }

  useEffect(() => {
    getCharityList()
  },[keyword])

  return (
    <div className='max-w-6xl mx-auto p-4'>
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
    </div>
  )
}

export default CharitySearchPage