
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


    const addCat = (Cart) => {
        dispatch ({
            type : 'ADD_CAT',
            paylod : Cart  
        })        
    }
    
    const deleteCat = (id) => {
        dispatch ({
            type : 'DELET_CAT',
            paylod : id   
        })        
    } 


    const changeQty = (id,qty) => {
        dispatch ({
            type : 'CHANGE_QTY',
            paylod  :  {
                id : id ,
                qty : qty 
            }  
        })        
    } 
    


    const value = { Cats : state.Cats , Cart : state.Cart , addCat , deleteCat  , changeQty }   
    // const value = { state } // its work   but you need discructer when use the element from state 

    
    return (
          <catContext.Provider value={value}  >  
              {children} 
          </catContext.Provider>
    )
 }
 
 export default CatProvider 
 
