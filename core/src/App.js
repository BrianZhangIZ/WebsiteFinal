import Navbar from "./Navbar"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Team from "./pages/Team"
import Contacts from "./pages/Contacts"
import Groups from "./pages/Groups"
import Register from "./pages/Register"
import StuResources from "./pages/StuResources"
import { Route, Routes } from "react-router-dom"
import i18n from "./i18next"
import { useTranslation, initReactI18next } from 'react-i18next';

function app(){
  

  return (
    <>
      <Navbar/>
      
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Team" element={<Team />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Groups" element={<Groups />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/StuResources" element={<StuResources />} />
        </Routes>
      </div>
    </>
  )
}

export default app