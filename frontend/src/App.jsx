import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Homescreen2 from './Screens/Homescreen2'
import  Categories  from './Screens/Categories'
import  Courses  from './Screens/Courses'
import CoursePage from './Screens/CoursePage'


function App() {
  
  return (
    <>
      
      <BrowserRouter>
       <Header/>
          <Routes>
            <Route path='/' element={<Homescreen2/>}/>
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
