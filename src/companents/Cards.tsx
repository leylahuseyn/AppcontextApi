import React, { useContext } from 'react'
// import Maincontext from './Context/Context'
import Card from './Card'
import Maincontext from '../Context/Context'
 
const Cards = () => {
    const {data}=useContext(Maincontext)
    console.log("first", data)
  return (
    <div className='container'>
        <div className="row">
            {
                data.map(((item,index)=>{
                    return(<Card key={index} item={item}/>)
                }))
            }
        </div>

    </div>
  )
}

export default Cards