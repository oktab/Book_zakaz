import { useState } from 'react'
import './i18n.js';
import { Route } from 'react-router';
import Home from './Pages/Home/Home.jsx';
import News from './Pages/News/News.jsx';
import Books from './Pages/Book/Books.jsx';
import { Routes } from 'react-router';
import Layout from './Pages/Layout.jsx';
import Rahbariat from './Pages/Rahbariyat/Rahbariat.jsx';
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/books' element={<Books />} />
          <Route path='/managment' element={<Rahbariat />} />
        </Route>
      </Routes>
    </>
  )
}

export default App