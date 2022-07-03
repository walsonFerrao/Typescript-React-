import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Mycomponent} from './Components/Body/Component'

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

console.log(searchobj)

  return (
    <div >
      <Navbar searchobj={searchobj} setsearchobj={setsearchobj} /> 
      {/* <Body/> */}
      <Mycomponent searchobj={searchobj}  setsearchobj={setsearchobj}   />
    </div>
  );
}

export default App;
