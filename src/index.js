import React from 'react';
import ReactDOM from 'react-dom/client';
import RegistrationForm from './register/RegistrationForm';
import 'bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegistrationForm />
  </React.StrictMode>
);




// import React from 'react';
// import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import RegistrationForm from './src/registration-form/RegistrationForm.jsx';

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Route exact path="/" component={RegistrationForm} />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


