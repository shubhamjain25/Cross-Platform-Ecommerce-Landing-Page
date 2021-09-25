import React, {useState} from 'react'
import "./navbar.css";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Dropdown from './dropdown';
function Navbar(){

    const [click,setClick]= useState(false);
    const [dropdown,setDropdown]= useState(false);

    const handleClick=()=>{
        setClick(!click);
    }

    const closeMobileMenu=()=>{
        setClick(false);
    }

    return (
        <Router>
           <nav className='navbar'>

               <Link to='/' className='navbar-logo'>
                   LGNAME
               </Link>

               <div className="menu-icon" onClick={handleClick}>
                   <i className={click?"fas fa-times":"fas fa-bars"}></i>
               </div>

               <ul className={click?'nav-menu active':'nav-menu'}>
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home    
                        </Link>    
                    </li>   
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home    
                        </Link>    
                    </li>  
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home    
                        </Link>    
                    </li>  
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            {/* Services <i className="fas fa-caret-down" onClick={()=>{setDropdown(!dropdown);}}></i>     */}
                            Services <i className="fas fa-caret-down"></i>
                        </Link>  
                        {!dropdown && <Dropdown/>}
                        {/* If dropdown is true, it will display */}
                    </li>  
                    
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home    
                        </Link>    
                    </li> 

               </ul>
           </nav>
        </Router>
    )
}

export default Navbar
