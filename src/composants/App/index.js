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
      <Welcome/>
      <WhatIDo/>
      <WhoAmI/>
      <MyProjects/>
      <Footer/>
      
      {/* Je n'arrive pas à gérer la 404, il ne comprend pas le "*" et en plus 
      quand il m'affiche la 404 il l'affiche à la suite des composants */}
      {/* <Routes>
            <Route path='*' element={<NotFound/>}/>
          </Routes>  */}

    </Router>
   </>
  )
}

// == Export
export default App;
