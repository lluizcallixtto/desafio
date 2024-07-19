// import React from 'react'

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login/Login"
import Signup from "./pages/Signup/Signup"
import Form from "./pages/Form/Form"

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login /> }></Route>
            <Route path="/Signup" element={<Signup /> }></Route>
            <Route path="/Form" element={<Form /> }></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
