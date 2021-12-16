


export const AppReducer = (state,action) => {


    if (action.type ==='DELET_CAT') { 
       return {
            ...state ,
            Cart : state.Cart.filter(c => c.id !== action.paylod)
       }
    } 
    
    else if ( action.type === 'ADD_CAT') {
       return {
          ...state , 
          Cart : [...state.Cart, {...action.paylod , qty : 1 }  ] // this is the main thing to  add Producet to cart Array  
       }
    } 

    else if ( action.type === 'CHANGE_QTY') {
      return {
         ...state , 
         Cart : state.Cart.filter(c => c.id === action.paylod.id ? (c.qty = action.paylod.qty)  : c.qty )  
      }
   }
    
    }
    
    






