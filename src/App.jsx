
import './App.css'
import About from './Component/About/About'
import Destination from './Component/Destinations/Destination'
import CallToAction from './Component/footer/CallToAction'
import Footer from './Component/footer/Footer'

import Memories from './Component/Memories/Memories'
import Header from './Component/Nav/Header/Header'
import Nav from './Component/Nav/Nav'
import Search from './Component/Searches/Search'
import Testimonial from './Component/Testimonial/Testimonial'
import Trips from './Component/Trips/Trips'

function App() {
  

  return (
    <>
       <div className='main'>
         <Nav/>
         <Header />
         <Memories />
      
        </div>
         <Trips />
         <Search />
         <div className='main'>
          <About />
         </div>
         <Testimonial />
         <Destination />
         <div className='main'>
          <CallToAction />
          
         </div>
         <Footer />
         
          
         
  
    </>
  )
 
}

export default App
