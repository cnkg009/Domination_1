import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
// import  useLocation  from 'react-router-dom';
import Home from './Components/Home'
import Details from './Components/Details'
import Create from './Components/Create';
import Edit from './Components/Edit';


export default function App() {

  const {search, pathname} =  useLocation();
  console.log(search,pathname)




  return (
    <div className='h-screen w-screen flex'>
     
    {(pathname != "/" || search.length > 0 ) && (<Link  to="/" className='text-red-600 absolute font-bold left-[16%] top-[3%]'>Home</Link>)}
   
     

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/create' element={<Create/>} />
      <Route path='/Details/:id' element={<Details/>} />
      <Route path='/edit/:id' element={<Edit/>} />
    </Routes>
     

    </div>
  )
}
