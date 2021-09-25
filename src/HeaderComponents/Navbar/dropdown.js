import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "./dropdown.css";
import {MenuItems} from "../Data/menuitems";

function Dropdown(){


    return (
        <>
            <ul className="dropdown-menu">
                {MenuItems.map((item,index)=>{
                    return <li key={index}>
                        <Link className={item.cName} to={item.path}> {item.title} </Link>
                    </li>
                })}

            </ul>
        </>
    )
}

export default Dropdown;