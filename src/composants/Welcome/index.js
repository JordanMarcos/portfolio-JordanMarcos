// == Import styles
import './styles.scss';
import 'animate.css';


// == Composant
const Welcome = () => (

  <div className="welcome-container">

    <div className="welcome-container-items">
     <div className="welcome-image-container animate__animated animate__bounceInDown"> <img className="pic-of-me" src="https://zupimages.net/up/22/17/gdu1.jpg" alt="Photo de profil"/> </div> 
      <div className="welcome-text"> <h1 className="welcome-text-h1">Hello !</h1> <p className="welcome-text-p">Bienvenue sur mon portfolio.</p> </div>
    </div>

    <div className="welcome-post"><a href="https://developpement-informatique.com/blog/article/3/le-developpement-web---quest-ce-que-cest-" target="_blank" alt="Qu'est-ce qu'un Développeur web ?" title="Qu'est-ce qu'un Développeur web ?"><p className="welcome-post-p">  Développeur web full stack </p></a>  </div>
    
  </div>

);

// == Export
export default Welcome;
