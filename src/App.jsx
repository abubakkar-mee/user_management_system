import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Table from './components/Table/Table'
import Create from './components/Create/Create'
import Read from './components/Read/Read'
import Update from './components/Update/Update'
import Header from './components/Header/Header'
import UserState from './context/UserState'
import Delete from './components/Delete/Delete'
import Login from './Login'



function App() {

  return (
    <>
    <Login />
    <UserState>
      <Header />
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/add" element={<Create />}/>
        <Route path="/read/:id" element={<Read />}/>
        <Route path="/update/:id" element={<Update />} />
        <Route path="/delete/:id" element={<Delete />} />
      </Routes>
    </UserState>
   
 
    </>
  )
}

export default App
