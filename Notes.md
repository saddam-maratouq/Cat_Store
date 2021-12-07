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



         