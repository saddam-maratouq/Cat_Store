// there is new way to use react router like this first at all yo have to export 

{ Browser Router in the main } 

import { BrowserRouter } from "react-router-dom";

then in the dom 

ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  
  the new way to use React router in App 

    <Routes>
        
          <Route path="home" element={<Home />} />
          <Route path="producet" element={<Producet />} />
          <Route path="cart" element={<Cart />} />   */}

       
         </Routes>  


         then use Link and to insted of a tag  and # ....  


         --- 


  there is new way to get id from React route insted of  ...   props.match.params.id 

  const { id } = useParams(); // warning id back as string //  destrcteriong cuz its obj ... 

  so you have to change it (parsInt or any another way depend on the case ) so dont forget log({}) in this way ...... 
 
  and dont foret to import useParams from react-dom 

   import { useParams } from "react-router-dom"; 

   ---       


  // you have put /src or any path after image path cuz in some case dosent work like this app Exampel :  

   /src/images/cute1.jpg  worked nicely 

   src/images/cute1.jpg   dosent work in some case .... 

--- 

 the way to use font ousome in project 

 first you have to i all packge 
 secound 

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons' // icon name 

last thing 
           <FontAwesomeIcon icon={faCoffee} >  </FontAwesomeIcon>

 
