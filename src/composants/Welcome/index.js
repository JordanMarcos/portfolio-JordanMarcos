// == Import styles
import './styles.scss';

// == Composant
const Welcome = () => (
<section id="home">
  <div className="welcome-container">
    
    <div className="welcome-container-items">
     <div className="welcome-image-container"> <img className="pic-of-me" src="https://zupimages.net/up/22/17/gdu1.jpg" alt="Photo de profil" title="photo de profil"/> </div> 
      <div className="welcome-text"> <p className="welcome-text-p"> Bonjour, bienvenue sur mon portfolio </p> </div>
    </div>

    <div className="welcome-post"> <p className="welcome-post-p">  Développeur web full stack </p> </div>
    
  </div>
</section>
);

// == Export
export default Welcome;
