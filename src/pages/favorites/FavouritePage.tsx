import { Link } from 'react-router-dom'
import { Nonprofit } from '../../api/charity/type'
import Card from '../../components/ui/Card/Card'

const FavoritePage = () => {

  return (
    <div className='max-w-6xl mx-auto p-4'>
    <div className='grid grid-cols-3 gap-4'>
      {(localStorage.getItem('charityList') ? JSON.parse(localStorage.getItem('charityList') ?? "") : []).map((charity: Nonprofit) => (
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
    </div>
  </div>
  )
}

export default FavoritePage