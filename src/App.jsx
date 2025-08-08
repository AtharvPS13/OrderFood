import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Canteen from './pages/Canteens/Canteen'
import Soon from './components/Coming_soon/Soon'
import CanteensDetails from './pages/CanteensDetails/CanteensDetails'

function App() {
  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Soon />} />
        <Route path="/canteen" element={<Canteen />} />
        <Route path="/canteen/:canteenName" element={<CanteensDetails />} />
        <Route path="*" element={<Soon />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
