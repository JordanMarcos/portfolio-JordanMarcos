// == Import styles
import './styles.scss';
import { Button } from 'semantic-ui-react'

// == Composant
const WhoAmI = () => (
<section id="whoAmI">
  <div className="whoami-container">
    <div className="whoami-container-items">
    <div className="whoami-title-container"> 
      <h2 className="whoami-title"> Qui je suis </h2>
    </div>

    <div className="whoami-post-container">
      <p className="whoami-post-text"> Concepteur et développeur d’applications web basé à Lyon </p>
    </div>

    <div className="whoami-text-container">
      <p className="whoami-text"> 
        Étant étudiant à l’école O’clock, j’ai plongé dans le monde du développement web. C’est un milieu qui m’a toujours intéressé depuis mon plus jeune âge, c’est pour cela qu’aujourd’hui, je suis pleinement épanoui, avec une envie constante d’apprendre de nouvelles choses. 
        En effet, avant cela, j’étais dans un tout autre univers, celui de la vente. Cela m’a permis d’avoir un savoir faire avec la clientèle, mais également des connaissances au niveau marketing et de l’entrepreneuriat.
        Le secteur du développement web est un univers qui m’inspire énormément. C’est un univers où la seule limite est notre imagination.     De plus, avoir la chance de constamment apprendre et de découvrir de nouvelles choses est quelque chose qui m’anime. Enfin, le développement web permet de constamment se challenger, ce qui est pour moi, une forte source de motivation.
        Enthousiaste, persévérant et fidèle à mes valeurs, je désire influencer mon entourage à créer un meilleur futur.
      </p>
    </div>

    <div className="whoami-button-container">  
        <Button basic inverted ><a className="button" href="https://docdro.id/tjWHTyv" target="_blank">Télécharger mon CV</a></Button>
    </div>

    </div>
  </div>
</section>
);

// == Export
export default WhoAmI;
