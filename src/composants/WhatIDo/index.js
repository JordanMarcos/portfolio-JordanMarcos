// == Import styles
import './styles.scss';

// == Composant
const WhatIDo = () => (
  <div className="whatido-container">

    <div className="whatido-container-title"> 
      <h2 className="whatido-title"> Ce que je fais </h2>
    </div>

    <div className="whatido-container-text">
      <p className="whatido-text"> En tant qu’étudiant en conception et développement d’applications web, je dispose de connaissances tant en frontend qu’en backend. En effet, durant mes études, j’ai découvert différents outils et langages de développement tels que React, Typescript, Node.js, ou encore la méthode Merise. J’ai récemment acquis un grand intérêt pour la 3D grâce à Three.js </p>
    </div>
    
    <div className="whatido-container-logos">
      <div className="whatido-logo"> <img className="js-logo" src="https://zupimages.net/up/22/17/yjs2.png" width="80%" height="80%" alt="logo JS" title="Javascript" /> </div>
      <div className="whatido-logo"> <img className="react-logo" src="https://zupimages.net/up/22/17/xuq1.png" width="100%" height="70%" alt="logo React" title="React"  /> </div>
      <div className="whatido-logo"> <img className="redux-logo" src="https://zupimages.net/up/22/17/tfpf.png" width="100%" height="80%" alt="logo Redux" title="Redux"  /> </div>
      <div className="whatido-logo"> <img className="node-logo" src="https://zupimages.net/up/20/44/b2tc.png" width="100%" height="80%" alt="logo Node JS" title="Node JS"  /> </div>
      <div className="whatido-logo"> <img className="express-logo" src="https://zupimages.net/up/21/40/cxjy.png" width="100%" height="40%" alt="logo Express" title="Express"  /> </div>
      <div className="whatido-logo"> <img src="https://zupimages.net/up/22/17/ogl0.png" width="100%" height="100%" alt="logo MongoDB" title="MongoDB" /> </div>
      <div className="whatido-logo"> <img src="https://zupimages.net/up/22/17/otkp.png" width="100%" height="100%" alt="logo Sequelize" title="Sequelize" /> </div>
      <div className="whatido-logo"> <img src="https://zupimages.net/up/22/17/5zix.png" width="90%" height="90%" alt="logo SQL" title="SQL" /> </div>
    </div>
    
  
  </div>
);

// == Export
export default WhatIDo;
