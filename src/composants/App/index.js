// == Import styles
import './styles.scss';

// == Import React
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// == Import composants
import Header from 'src/composants/Header';
import Welcome from 'src/composants/Welcome';
import WhatIDo from 'src/composants/WhatIDo';
import WhoAmI from 'src/composants/WhoAmI';
import MyProjects from 'src/composants/MyProjects';
import Footer from 'src/composants/Footer';
import NotFound from 'src/composants/NotFound';

// == Composant
function App() {
  return (
    <>
    <Router>
      <Header/>
    </Router>
    
      <Welcome/>
      <WhatIDo/>
      <WhoAmI/>
      {/*<MyProjects/>
      <Footer/>
      <NotFound/> */}
   </>
  )
}

// == Export
export default App;
