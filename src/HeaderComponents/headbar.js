import React from 'react';
import "./headbarStyle.css";

function headbar(){

    const categories = ['Shoes', 'Cloths', 'Home Decor', 'Office', 'Outside', 'Sports','Shoes', 'Cloths', 'Home Decor', 'Office', 'Outside', 'Sports'];

    return (
        <div className="headbar">
            <div className="headbarContents">
                <div className="headbarTitle"> Recently Launched </div>
                <div className="headbarBody" align="top"> Unique Amazing Products for everyone </div>
            </div>

        {/* <div className="headbarCategories">
            {categories.map((category,index)=>{
                return <div class="headbarCategoryNames">
                    {category}
                </div>
            })}
        </div> */}
        </div>
    )
}

export default headbar;