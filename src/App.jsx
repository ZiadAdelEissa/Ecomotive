import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router'
import Header from './Components/Header/Header'
import About from './Components/About/About'
import Preff from './Components/Preff/Preff'
import Footer from './Components/Footer/Footer'
import Rejister from './Components/Reqister/Rejister'

function App() {

  return (
    <>
    <Navbar/>
    <Header />
    <Routes>
    <Route path="/" element={
        <>
      <About/>
      <Preff/>
      </>}/>
    <Route path="rejister" element={<Rejister />} />
    </Routes>
        <Footer/>
    </>
  )
}

export default App
