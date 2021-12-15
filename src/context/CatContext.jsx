
import React, {createContext, useReducer} from 'react'    
import { catData } from "../Cat-Data/CatData"; 
import {AppReducer}  from './AppReducer'
// import {catContext} from '../context/CatContext'  




const initialState =  {

    Cats : catData ,
    Cart :  []  
}
    
   


 export  const catContext = createContext(initialState)    


 
 const CatProvider = ({children}) => { 

    const [state,dispatch] = useReducer(AppReducer,initialState) 


    const addCat = (Cats) => {
        dispatch ({
            type : 'ADD_CAT',
            paylod : Cats  
        })

        
    }
    


    const value = { Cats : state.Cats , Cart : state.Cart , addCat  }   
    // const value = { state } // its work   but you need discructer when use the element from state 

    
    return (
          <catContext.Provider value={value}  >  
              {children} 
          </catContext.Provider>
    )
 }
 
 export default CatProvider 
 
