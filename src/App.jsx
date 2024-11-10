import { useState } from 'react'
import './App.css'
import { combineSlices } from '@reduxjs/toolkit'
import { createBrowserRouter } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Paste from './Paste'
import ViewPaste from './ViewPaste'
import { RouterProvider } from 'react-router-dom'

const router= createBrowserRouter(
  [
    {
      path: '/',
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
    },
    {
      path: '/pastes',
      element:
      <div>
        <Navbar/>
        <Paste/>
      </div>
    },
    {
      path: '/pastes/:id',
      element:
      <div>
        <Navbar/>
        <ViewPaste/>
      </div>
    }
  ]
);

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
