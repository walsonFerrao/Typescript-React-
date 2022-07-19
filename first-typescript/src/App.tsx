import React, { useEffect, useState } from 'react';
import SearchAppBar from './Components/Navbar/Navbar'
import {Mycomponent} from './Pages/Home'
import {Route,Routes} from 'react-router-dom'
import {Fulldata} from './Pages/Fulldata'

interface searchqueries{
  query:string;
}

function App() {
const [searchobj,setsearchobj]=useState<searchqueries>({
  query:'',
})

  return (
    <div >
      <SearchAppBar searchobj={searchobj} setsearchobj={setsearchobj}/>
      <Routes>
      <Route path='/' element={<Mycomponent searchobj={searchobj}   />} />
      <Route path='/full' element={<Fulldata/>} />
      </Routes>
    </div>
  );
}
export default App;
