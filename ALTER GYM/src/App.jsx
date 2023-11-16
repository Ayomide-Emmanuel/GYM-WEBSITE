import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from "./routes/Home"
import Service from "./routes/Service"
import About from "./routes/About"
import Locations from "./routes/Locations"
import Contact from "./routes/Contact"
import Free from "./routes/Free"
import Join from "./routes/Join"


import './App.css'
import Navbar from './component/Navbar'

function App() {
  

  return (
    <>
      <BrowserRouter>
   <Navbar/>

    <Routes>
   
    <Route path= "/" element={<Home/>}/>
    <Route path= "/location" element={<Locations/>}/>
    <Route path= "/about" element={<About/>}/>
     <Route path= "/service" element={<Service/>}/>
     <Route path= "/contact" element={<Contact/>}/>
     <Route path= "/free trial" element={<Free/>}/>
     <Route path= "/join" element={<Join/>}/>

     

 
   </Routes>
   </BrowserRouter> 
    </>
  )
}

export default App
