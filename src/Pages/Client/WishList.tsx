import React, { useContext } from 'react'
import Maincontext from '../../Context/Context'

const WishList = () => {
    const {fav,deleFromFav}=useContext(Maincontext)
  return (
    <div className='container'>
        <div className="row">
            {
                fav.map((item,index)=>{
                    return(
                        <div className='col-lg-3 col-md-6 mr-3 mb-2'>
                        <div className="card" style={{width: "18rem;"}}>
                     <img className="card-img-top" src={item.image} alt="Card image cap"/>
                     <div className="card-body">
                       <h5 className="card-title">{item.title}</h5>
                      <button onClick={()=>{
                        deleFromFav(item)
                      }}>delete</button>
                     </div>
                   </div>
                       </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default WishList