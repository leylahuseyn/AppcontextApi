import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Maincontext from '../Context/Context'

const Header = () => {
    const {fav}=useContext(Maincontext)
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/WishList">WishList</Link>
        {
            fav.length>0 &&
            (
                <span>({fav.length})</span>
            )
        }
        <Link to="/Product">Product</Link>
        <Link to="/Contact">Contact</Link>
    </div>
  )
}

export default Header