import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/index';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['IronMan']);

  const onAddCategory = (newCategory) =>{
    // setCategories(categories.push('Batman'));
    if(categories.includes(newCategory)){
      return
    }
    setCategories([ newCategory, ...categories ]);
  };

  console.log(categories);

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* Input */}
      {/* <AddCategory setCategories={setCategories}/> */}
      <AddCategory onNewCategory={ (value) => onAddCategory(value) }
      />

      {/* Listado de GIF */}
      <ol>
        { categories.map( (category, index) =>  (
            <GifGrid
              key={category}
              category={category}
            />
          )
        )}
      </ol>
        {/* GIF Item */}
    </>
  )
}
