import React from 'react';
import "./categoriesbar.css";

function CategoriesBar(){

    const categories = ['Shoes', 'Cloths', 'Home Decor', 'Office', 'Outside', 'Sports','Shoes', 'Cloths', 'Home Decor', 'Office', 'Outside', 'Sports'];

    return (
        <>
          <div className="headbarCategories">
            {categories.map((category,index)=>{
                return <div class="headbarCategoryNames">
                    {category}
                </div>
            })}
        </div>  
        </>
    )
}

export default CategoriesBar;
