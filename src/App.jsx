import React from 'react';
import Pagination from './component/Pagination';
import Search from './component/Search';
import Stories from './component/Stories';
import style from './css/style.css'
function App() {
  return (
    <>
    <Search/>
    <Pagination/>
    <Stories/>
    </>
  )
}

export default App;