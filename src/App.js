import React, {useState, useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Index';
import About from './pages/About.js';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';
function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggle = () =>{
    setMenuOpen(!menuOpen)
  }
  useEffect(() => {
    const hideMenu = () =>{
      if(window.innerWidth>760 && menuOpen){
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', hideMenu)
    return () =>{
      window.removeEventListener('resize', hideMenu)
    }
  })
  return (
    <>
      <Navbar toggle={toggle}/>
      <Dropdown menuOpen={menuOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/menu" exact component={Menu}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
