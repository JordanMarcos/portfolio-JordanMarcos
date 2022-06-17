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
      Étudiant à l’école O’clock, j’ai plongé dans le monde du développement web récemment. 
      C’est un métier qui m’intéresse depuis mon plus jeune âge, c’est pour cela, qu’aujourd’hui, 
      je suis pleinement épanoui avec une envie constante et forte d’apprendre de nouvelles choses. 
      </p>
      
      <p className="whoami-text">
      En effet, avant cela, j’étudiais un tout autre univers, celui du commerce. 
      Cela m’a permis d'acquérir un savoir-faire avec la clientèle, d'aiguiser mes connaissances en marketing, 
      et enfin, de développer mon sens de l'entrepreneuriat.
      </p>

      <p className="whoami-text">
      Le secteur du développement web est un secteur qui m’inspire profondément. C’est un secteur où la seule limite est
      notre imagination. De plus, avoir la chance de régulièrement découvrir de nouvelles pratiques et langages sont pour moi 
      des points extrêmement positifs. Le développement web me permet de constamment me challenger, ce qui est pour moi une forte 
      source de motivation et d’amusement.
      </p>
      
    </div>

    <div className="whoami-button-container">  
        <Button basic inverted ><a className="button" href="https://docdro.id/GpYvkFQ" target="_blank">Télécharger mon CV</a></Button>
    </div>

    </div>
  </div>
</section>
);

// == Export
export default WhoAmI;
