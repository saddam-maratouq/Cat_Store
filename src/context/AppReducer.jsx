


export const AppReducer = (state,action) => {


    if (action.type ==='DELET_TRANS') { 
       return {
            ...state ,
            transction : state.transction.filter(trans => trans.id !== action.paylod)
       }
    } 
    
    else if ( action.type === 'ADD_CAT') {
       return {
          ...state , 
          Cart : [action.paylod , ...state.Cart] // this is the main thing to Producet   to cart 
       }
    }
    
    }
    
    






