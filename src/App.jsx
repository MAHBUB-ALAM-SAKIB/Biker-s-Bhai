import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './pages/home/Home'
import "./App.css"
import Footer from "./Components/Navbar/footer/Footer"
import Gallery from './pages/home/Gallery/Gallery'
import Parts from "./pages/home/Parts/Parts"
import About from './pages/home/About/About'
import Contact from './pages/home/contact/Contact'



function App() {

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" index element={<Home/>}></Route>
        <Route path="/bikeprice" index element={<Gallery/>}></Route>
        <Route path="/parts" index element={<Parts/>}></Route>
        <Route path="/aboutus" index element={<About/>}></Route>
        <Route path="/contactus" index element={<Contact/>}></Route>

      </Routes>
      <Footer/>
    </Router>


    </>
  
  )
}

export default App
