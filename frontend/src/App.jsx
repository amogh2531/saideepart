import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homescreen from './Screens/Homescreen'
import  Categories  from './Screens/Categories'
import  Courses  from './Screens/Courses'
import CoursePage from './Screens/CoursePage'


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
            <Route path='/categaries' element={<Categories/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/courses/:id' element={<CoursePage/>}/>
          </Routes>      
       <Footer/>
       </BrowserRouter>
      
    </>
  )
}

export default App
