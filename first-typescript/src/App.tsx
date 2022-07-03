import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Mycomponent} from './Components/Body/Component'
import {Route,Routes} from 'react-router-dom'
import {Fulldata} from './Components/Fulldata/Fulldata'

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
      {/* <Body/> */}
      <Routes>
      <Route path='/' element={<Mycomponent searchobj={searchobj}  setsearchobj={setsearchobj}   />
} />

      <Route path='/full' element={<Fulldata/>} />
       
      </Routes>
    </div>
  );
}

export default App;
