import React, {useState} from 'react'
import { isBrowser } from 'react-device-detect';

function Navbar(){

    let sys = isBrowser?"Browser":"Mobile";
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
        <div className='navbarsticky'>
           <nav className='navbar'>

               <a href='/' className={"navbar-logo"}>
                   <img src="https://uilogos.co/img/logotype/hexa.png" alt="Logo" className={`logo-img `+(sys)}></img>
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
        </div>
    )
}

export default Navbar
