import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid';

export const GiftSearchApp = () => {
    
    const [categories, setCategories] =  useState(['Naruto']);                          
   
    return (
        <>
            <h2>GiftSearchApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>            
            <ol>
                {
                    categories.map( (category) =>(
                        <GifGrid 
                            key = { category }
                            category = { category }
                        />
                    ))
                }
            </ol>
            
        </>
    )
}
