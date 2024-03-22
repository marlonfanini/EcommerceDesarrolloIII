import React, { useState } from "react"
import { Link } from "react-router-dom"
import ListIcon from '@mui/icons-material/List';
import { isExpandedAtom } from "../../lib/atom";
import { useAtom } from "jotai";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false)
  const [isExpanded, setIsExpanded] = useAtom(isExpandedAtom);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); 
  };

  
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='catgrories d_flex' style={{cursor: 'pointer'}} onClick={toggleExpand}>
            <ListIcon sx={{marginTop: '10px', marginRight: '3px'}} />
            <h4>
            Categorías {isExpanded ? <i className='fa fa-chevron-up'></i> : <i className='fa fa-chevron-down'></i>}
            </h4>
          </div>

          <div className='navlink'>
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li onClick={() => window.location.reload()}>
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to='/pages'>pages</Link>
              </li>
              <li>
                <Link to='/user'>user account</Link>
              </li>
              <li>
                <Link to='/vendor'>vendor account</Link>
              </li>
              <li>
                <Link to='/track'>track my order</Link>
              </li>
              <li>
                <Link to='/contact'>contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
