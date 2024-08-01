import React, { useContext } from 'react'
import "./card.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
    const {addTOFAv}=useContext(Maincontext)
  return (
    <div className='col-lg-3 col-md-6 mr-3 mb-2 fs-5'>
     <div className="card" style={{width: "18rem;"}}>
      <FontAwesomeIcon className='hearticon'  onClick={()=>{
       
        addTOFAv(item)
    }} icon={faHeart} />
 <Link to={`/${item.id}`}> <img className="card-img-top" src={item.image} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title fs-6   ">{item.title}</h5>
    
  </div>
</div>
    </div>
  )
}

export default Card