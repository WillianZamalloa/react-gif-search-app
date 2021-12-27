import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    // crear una fumcion y que reciba evento a
    const handleInputChange = (e) =>{
        //console.log(e.target.value);
        setInputValue(e.target.value);
    }
    // el primer argumento de los onSubmit o onChange es el event y ese el 
    // que estamos atrapando con el metodo
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputValue.length > 2) {
            setCategories(cats => [ inputValue, ...cats, ]); 
            setInputValue('');   
            //console.log('Entro!!');        
        }
        // setCategories(cats => [ inputValue, ...cats, ]); 
        // setInputValue('');  
        //console.log('lng: '+inputValue.length);
    }

    return (        
        <form onSubmit={ handleSubmit }>
            <input            
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>      
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}