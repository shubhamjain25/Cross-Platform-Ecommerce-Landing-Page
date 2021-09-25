import React, {useState} from 'react'
import "./navbar.css";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import Dropdown from './dropdown';
function Navbar(){

    const [click,setClick]= useState(false);
    const [dropdown,setDropdown]= useState(false);
    const [textValue, setTextValue] = useState(null);

    const handleClick=()=>{
        setClick(!click);
    }

    const closeMobileMenu=()=>{
        setClick(false);
    }

    const changeText=(e)=>{
        setTextValue(e.target.value);
    }


    return (
           <nav className='navbar'>

               <a href='/' className='navbar-logo'>
                   <img src="https://apidev.peping.in/Images/p.svg" alt=""></img>
               </a>

               <div className='dropdown-title' onClick={closeMobileMenu}>
                        All Category <i className="fas fa-angle-down" onClick={()=>{setDropdown(!dropdown);}}></i>    
                        {/* Services <i className="fas fa-caret-down"></i> */}
                </div> 

               <div className="searchbox">
                    <div className="searchicon"> 
                        <i class="fas fa-search"></i>
                    </div>

                    <div className="searchfield">
                        {/* <input autocomplete="off" type="text" class="searchfieldtext" placeholder="Search by Product name or Category" value=""></input> */}
                        <input autocomplete="off" name="textValue" type="text" class="searchfieldtext" placeholder="Search by Product name or Category" value={textValue} onChange={changeText}></input> 
                        
                    </div>
               </div>

                < div className="side-elements">

                    <div className="menu-icon" onClick={handleClick}>
                   <i className={click?"fas fa-times":"fas fa-bars"}></i>
                    </div>

                    <div className="brand-btn"> 
                    I am a brand
                    </div>

                    <div className="searchicon2"> 
                        <i class="fas fa-search"></i>
                    </div>
                
                </div>
            
           </nav>
    )
}

export default Navbar
