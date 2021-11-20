import React, {useState, useCallback} from 'react';
import Helper from "./helper/Helper";
import { isBrowser } from 'react-device-detect';
import Masonry from 'react-masonry-component';
import {categoryList} from '../data/categoryList';

let gutterValue = isBrowser?30:15;

const masonryOptions = {
    transitionDuration: 0,
    gutter: gutterValue,
    fitWidth: true,
};


function Card({sliderData}){

    const [categoryWord, setcategoryWord] = useState('');
    const [categoryId, setcategoryId] = useState('');

    let sys = isBrowser?"Browser":"Mobile";

    function handleClick(index){
        /* Updates Cards */
        console.log(`Card Clicked equals: ${categoryList[index].name}`);
        setcategoryWord(categoryList[index].name);
        setcategoryId(categoryList[index].id)
        console.log('Click Handled');
    }

    return (
        <div className="body">
            <div className={`headbarCategories scroll `+(sys)}>
                {categoryList.map((category, index) => {
                    return <div className={`headbarCategoryNames `+(sys)} onClick={handleClick.bind(this, index)}>
                    <div className={categoryWord === category.name ? 'activeCategory' : 'inactiveCategory'}>{category.name}</div>
                  </div>;
                })}
            </div>

    
            <Masonry className={'grid'} options={masonryOptions}>
                {sliderData.map((slideData, index) => {
                    if (categoryId === '' || (slideData.category_list.indexOf(categoryId) !== -1) ){
                        return (
                            <Helper slide={slideData} />
                        );
                    }
                })}

            </Masonry>
        </div>
    );
}

export default Card;

