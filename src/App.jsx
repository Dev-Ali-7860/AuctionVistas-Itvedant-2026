import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Browse_auction from './pages/Browse_auction'
import Contact from './pages/Contact'
import Create_Auction from './pages/Create_Auction'
import Login from './pages/Login'
import Register from './pages/Register'
import Order from './pages/Order'
import Profile from './pages/Profile'
import How_its_works from './pages/How_its_works'
import Browse_auctions from './components/Browse_auctions'
import RolexWatch from './pages/RolexWatch'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import { useContext } from 'react'
import { ThemeContext, ThemeProvider } from './components/ThemeContext'

function AppCon() {

  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/browse_auctions' element={<Browse_auctions />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/create_auction' element={<Create_Auction />} />
            <Route path='/order' element={<Order />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/How_its_works' element={<How_its_works />} />
            <Route path='/terms' element={<Terms />} />
            <Route path='/policy' element={<Privacy />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/RolexWatch' element={<RolexWatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppCon />
    </ThemeProvider>
  );
}

export default App
