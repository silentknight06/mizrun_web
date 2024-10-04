import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Contact from './components/Contact'
import Achivement from './components/Achivement'
import Partnership from './components/Partnership'
import Services from './components/Services'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'


const AppLayout = () =>{
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}


const approuter = createBrowserRouter ([
  {
    path:'/',
    element:<AppLayout/>,
    children:[
      {
        path:'/About',
        element:<About/>
      },
      {
        path:'/Contact',
        element:<Contact/>
      },
      {
        path:'/achivement',
        element:<Achivement/>
      },
      {
        path:'/partnership',
        element:<Partnership/>
      },
      {
        path:'/services',
        element:<Services/>
      }
    ]
  }
])



const App = () => {
  return (
    <div>
         <RouterProvider router={approuter}>

         </RouterProvider>
    </div>
  )
}

export default App
