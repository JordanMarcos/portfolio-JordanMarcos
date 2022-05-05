// == Import styles
import './styles.scss';
import 'semantic-ui-css/semantic.min.css'

// == Import React
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
      <WhatIDo/>
      <WhoAmI/>
      <MyProjects/>
      <Footer/>

    </Router>
   </>
  )
}

// == Export
export default App;
