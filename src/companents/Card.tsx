import React, { useContext } from 'react'
import "./card.css"
import Maincontext from '../Context/Context'
import { Link } from 'react-router-dom'
const Card = ({item}) => {
    const {addTOFAv}=useContext(Maincontext)
  return (
    <div className='col-lg-3 col-md-6 mr-3 mb-2'>
     <div className="card" style={{width: "18rem;"}}>
 <Link to={`/${item.id}`}> <img className="card-img-top" src={item.image} alt="Card image cap"/></Link>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <button onClick={()=>{
        addTOFAv(item)
    }}>add to fav</button>
  </div>
</div>
    </div>
  )
}

export default Card