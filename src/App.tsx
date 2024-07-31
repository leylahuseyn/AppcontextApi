import React, { useEffect, useState } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROUTES from "./index.routes"
const router=createBrowserRouter(ROUTES)
// import MainContext from './Context/Context'
import axios from 'axios';
import Maincontext from './Context/Context';
const App = () => {
  const [data,setData]=useState([])
  const [fav,setfav]=useState(localStorage.getItem("wish")?JSON.parse(localStorage.getItem("wish")):[])
  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then(res=>{
      console.log(res.data)
      setData(res.data)
    })
  },[])

  function addTOFAv(product) {

    const target=fav.find((item)=>item.id==product.id)
    if (target) {
      alert("movcuddur")
    }
    else{
      setfav([...fav,product])
      localStorage.setItem("wish",JSON.stringify([...fav,product]))
    }
    
  }
  function deleFromFav(product) {
    const target=fav.find((item)=>item.id==product.id)
    fav.splice(fav.indexOf(target),1)
    setfav([...fav])
    localStorage.setItem("wish",JSON.stringify([...fav]))

  }
  

  const leyla ={
    data,
    addTOFAv,
    fav,
    deleFromFav
  }
  return (
    <div>
<Maincontext.Provider value={leyla}>
      <RouterProvider router={router}/>

</Maincontext.Provider>

    </div>
  )
}

export default App