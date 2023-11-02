import React from 'react'
import { NavLink } from 'react-router-dom'
import './ErrorPage.css'

export default function ErroPage() {
  return (
    <div className='errorpage'>
       <h1>404 Error Page</h1>
       <p>Sorry , This page is doesn't exit</p>
       <NavLink to='/'> Go Back Dashboard</NavLink>
    </div>
  )
}
 