// == Import styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles.scss';


// == Composant
const MyProjects = () => (
   
  <div className="myprojects-container">
    <div className="myprojects-container-items"> 
    
      <div className="myprojects-container-title"> 
        <h2 className="myprojects-title"> Mes projets </h2> 
      </div>

      <div className="myprojects-container-slider">
        <Carousel 
        showThumbs={false} 
        showStatus={false} 
        className="carousel-container">

          <div key="1"> 
            <img 
            className="img1" 
            src="https://zupimages.net/up/22/17/j2y8.jpg" 
            alt="" /> 
          </div>

          <div key="2"> 
            <img className="img2" src="https://zupimages.net/up/22/17/onil.jpg" alt="" /> 
          </div>

          <div key="3"> 
            <img className="img3" src="https://zupimages.net/up/22/17/i92z.jpg" alt="" /> 
          </div>
        </Carousel>
      </div>
    
    </div>
  </div>
);

// == Export
export default MyProjects;
