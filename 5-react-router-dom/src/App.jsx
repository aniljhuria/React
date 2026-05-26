import { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Nofound from './pages/Nofound'
import Product from './pages/Products'
import Men from './pages/Men'
import Women from './pages/Women'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Navbar2 from './componets/Navbar2'

function App() {  

  return (
    <div className='h-screen '>
      <Navbar />
      <div className='container mx-auto'>
        {/* <Navbar2 /> */}
        <div className='mt-2 text-black w-full'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/product' element={<Product />}>
              <Route path='men' element={<Men />}/>
              <Route path='women' element={<Women />}/>
            </Route>
            <Route path='/course' element={<Course />}/>
            <Route path='/course/:id' element={<CourseDetails />}/>
            <Route path='*' element={<Nofound />}/>
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
