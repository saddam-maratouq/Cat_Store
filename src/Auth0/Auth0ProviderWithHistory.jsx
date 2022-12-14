// import React from "react";
// // old way
// // import { useHistory } from "react-router-dom";

// import { useNavigate } from "react-router-dom";

// import { Auth0Provider } from "@auth0/auth0-react";

// const Auth0ProviderWithHistory = ({ children }) => {
//   const domain = process.env.REACT_DOMAIN;
//   const clientId = process.env.REACT_CLIENT_ID;

//   //check //
//   const history = useNavigate();

//   const onRedirectCallback = (appState) => {
//     history.push(appState?.returnTo || window.location.pathname);
//   };

//   return (
//     <Auth0Provider
//       domain={domain}
//       clientId={clientId}
//       redirectUri={window.location.origin}
//       onRedirectCallback={onRedirectCallback}
//     >
//       {children}
//     </Auth0Provider>
//   );
// };

// export default Auth0ProviderWithHistory;
