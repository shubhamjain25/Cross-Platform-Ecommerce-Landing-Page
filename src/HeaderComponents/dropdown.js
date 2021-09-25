import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./dropdown.css";
import {MenuItems} from "./Data/menuitems";

function Dropdown(){

    const [click, setClick] = useState(false);

    return (
        <>
            <ul onClick={()=>{setClick(!click);}} className={click?'dropdown-menu clicked':'dropdown-menu'}></ul>
            {MenuItems.map((item,index)=>{
                return <li key={index}>
                    <Link className={item.cName} to={item.path} onClick={()=>{setClick(false);}}> {item.title} </Link>
                </li>
            })}

        </>
    )
}

export default Dropdown;