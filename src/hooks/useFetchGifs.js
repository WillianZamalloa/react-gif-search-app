import { useState, useEffect } from "react";
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    //snipet us y tab
    const [state, setState] = useState({
        data: [],
        loading: true
    });
    //ojo los effectos no pueden ser Async por que son sincronos
    // pero el cuerpo de un efecto si
    useEffect( ()=>{
        getGifs(category)
            .then( imgs => {

                setState({
                    data: imgs,
                    loading: false
                })
            });
    }, [category]);  // si la cat cambia vuelve a ejecutar todo eso

    return state; // { data: [], loading: true }
    
}
