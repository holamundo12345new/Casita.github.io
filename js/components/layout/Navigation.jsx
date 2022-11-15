import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AccessBank } from '../pages/AccessBank/AccessBank'
import { Dashboard } from '../pages/Dashboard'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/security' element={<AccessBank />} />
        </Routes>
    </BrowserRouter>
  )
}
