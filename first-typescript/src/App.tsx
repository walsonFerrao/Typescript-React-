import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar'
import {Mycomponent} from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import {Fulldata} from './Pages/Fulldata'

interface searchqueries{
  query:string;
  isquery:boolean
  ishome:boolean
}

function App() {
const [searchobj,setsearchobj]=useState<searchqueries>({
  query:'',
  isquery:false,
  ishome:true
})

  return (
    <div >
      <Navbar searchobj={searchobj} setsearchobj={setsearchobj} /> 
      <Routes>
      <Route path='/' element={<Mycomponent searchobj={searchobj}  setsearchobj={setsearchobj} />} />
      <Route path='/full' element={<Fulldata/>} />
      </Routes>
    </div>
  );
}
export default App;
