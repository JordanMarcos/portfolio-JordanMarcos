// == Import styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './styles.scss';
import { style } from "@mui/system";

//lightbox js vanilla create div and place on end of body
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

//function to show the lightbox img 1 
function handleClick() {
  const image = document.querySelectorAll('img')
  const img = document.createElement('img')

  lightbox.classList.add('active')
  img.src = "https://zupimages.net/up/22/17/j2y8.jpg"
  while(lightbox.firstChild){
    lightbox.removeChild(lightbox.firstChild)
  }
  lightbox.appendChild(img)
}

//function to show the lightbox img 2
function handleClick2() {
  const image = document.querySelectorAll('img')
  const img = document.createElement('img')

  lightbox.classList.add('active')
  img.src = "https://zupimages.net/up/22/17/onil.jpg"
  while(lightbox.firstChild){
    lightbox.removeChild(lightbox.firstChild)
  }
  lightbox.appendChild(img)
}

//function to show the lightbox img 3
function handleClick3() {
  const image = document.querySelectorAll('img')
  const img = document.createElement('img')

  lightbox.classList.add('active')
  img.src = "https://zupimages.net/up/22/17/i92z.jpg"
  while(lightbox.firstChild){
    lightbox.removeChild(lightbox.firstChild)
  }
  lightbox.appendChild(img)
}

//when click on image, it doesn't close but when we click on othe parts it close
lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})


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

          <div 
          key="1"
          onClick={handleClick}> 
            <img 
            className="img" 
            src="https://zupimages.net/up/22/17/j2y8.jpg"
            alt=""
             /> 
          </div>

          <div
          key="2"
          onClick={handleClick2}> 
            <img 
            className="img" 
            src="https://zupimages.net/up/22/17/onil.jpg" 
            alt="" /> 
          </div>

          <div 
          key="3"
          onClick={handleClick3}> 
            <img 
            className="img" 
            src="https://zupimages.net/up/22/17/i92z.jpg" 
            alt="" /> 
          </div>
        </Carousel>
      </div>
     </div>

 </div>
);

// == Export
export default MyProjects;
