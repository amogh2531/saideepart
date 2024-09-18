import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homescreen from './Screens/Homescreen'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
       <Header/>
          <Routes>
            <Route path='/' element={<Homescreen/>}/>
            <Route path='/cart' element={<Homescreen/>}/>
            <Route path='/signup' element={<Homescreen/>}/>
            <Route path='/wishlist' element={<Homescreen/>}/>
            <Route path='/categaries' element={<Homescreen/>}/>
            <Route path='/courses' element={<Homescreen/>}/>
          </Routes>      
       <Footer/>
       </BrowserRouter>
      
    </>
  )
}

export default App
