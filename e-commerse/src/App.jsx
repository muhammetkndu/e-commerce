import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AppProvider } from './context.provider'
import Navbar from "./compenents/navbar"
import Footer from "./compenents/footer"
import Home from './pages/home'
import AllCategories from './pages/AllCategories'
import Favorites from './pages/Favorites'
import Cart from './pages/Cart'
import About from './pages/about'
import Contact from './pages/contact'
import Account from './pages/account'
import Orders from './pages/orders'
import Addresses from './pages/addresses'
import Settings from './pages/settings'
import Returns from './pages/returns'

function App() {
  return (
  <AppProvider>
    <Router>
      <div className="App">
        <Navbar />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<AllCategories />} />
            <Route path="/category/:categoryName" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/addresses" element={<Addresses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  </AppProvider>    
  )
}

export default App
