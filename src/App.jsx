import { useState } from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import IniciarSession from './layout/iniciarSession'
import Layaout from './layout/layaout'
import EditarCliente from './paginas/editarCliente'
import Inicio from './paginas/inicio'
import LoginForm from './paginas/LoginForm'
import NuevoCliente from './paginas/nuevoCliente'

function App() {

  return (
   <BrowserRouter>
   <Routes>
     {/* Group login */}
     {/* <Route path="/" element={<IniciarSession/>}>
     <Route index element={<LoginForm/>}/>
     </Route> */}
    {/* main group */}
     <Route path="/clientes" element={<Layaout/>}>
     <Route index element={<Inicio/>}/>
     <Route path="nuevo" element={<NuevoCliente/>}/>
     <Route path="editar/:id" element={<EditarCliente/>}/>
     </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
