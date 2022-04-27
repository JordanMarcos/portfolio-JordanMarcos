// == Import styles
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BsGithub } from "react-icons/bs";
import './styles.scss';


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
  // const image = document.querySelectorAll('img')
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

        {/* Text + loader informant que mes projets sont en cours de développement */}
      <div className="container-no-projects">
        <div>
          <p className="myprojects-no-projects-text">En cours de développement</p>
        </div>
    
        <div className="loader-container">
          <div className="dot d1"></div>
          <div className="dot d2"></div>
          <div className="dot d3"></div>
        </div>
      </div> 

        {/* si tu veux re afficher le carousel image, décommente ce qu'il y a en bas */}
        {/* <Carousel 
        showThumbs={false} 
        showStatus={false} 
        className="carousel-container">

          <div 
          className="image"
          key="1"
          onClick={handleClick}> 
            <img 
            className="img" 
            src="https://zupimages.net/up/22/17/j2y8.jpg"
            alt=""
             /> 

             <div className="image-overlay">
                <div className="image-title">
                  Jeu snake | REACT
                </div>
                <p className="image-description"> 
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Pariatur aut omnis ut 
                  ipsam fugit recusandae, aliquam temporibus 
                  labore fuga quo, magnam id molestias totam 
                  quaerat inventore, hic voluptatem repellendus
                  possimus? 
                </p>
                <a 
                className="image-logo-git" 
                href="https://github.com/JordanMarcos" 
                target="_blank"> 
                  <BsGithub  
                  title='lien github du projet' 
                  size={'2rem'} 
                  className="github" >
                  </BsGithub>
                </a>
             </div>
          </div>

          <div
          className='image'
          key="2"
          onClick={handleClick2}> 
            <img 
            className="img" 
            src="https://zupimages.net/up/22/17/onil.jpg" 
            alt="" /> 

              <div className="image-overlay">
                <div className="image-title">
                  Blog | REACT
                </div>
                <p className="image-description"> 
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Pariatur aut omnis ut 
                  ipsam fugit recusandae, aliquam temporibus 
                  labore fuga quo, magnam id molestias totam 
                  quaerat inventore, hic voluptatem repellendus
                  possimus? 
                </p>
                <a 
                className="image-logo-git" 
                href="https://github.com/JordanMarcos" 
                target="_blank"> 
                  <BsGithub  
                  title='lien github du projet' 
                  size={'2rem'} 
                  className="github" >
                  </BsGithub>
                </a>
             </div>
          </div>

          <div 
          className='image'
          key="3"
          onClick={handleClick3}> 
            <img 
            className="img" 
            src="https://zupimages.net/up/22/17/i92z.jpg" 
            alt="" /> 
            
           <div className="image-overlay">
                <div className="image-title">
                  Landing page | REACT
                </div>
                <p className="image-description"> 
                  Lorem ipsum dolor sit amet consectetur 
                  adipisicing elit. Pariatur aut omnis ut 
                  ipsam fugit recusandae, aliquam temporibus 
                  labore fuga quo, magnam id molestias totam 
                  quaerat inventore, hic voluptatem repellendus
                  possimus? 
                </p>
                <a 
                className="image-logo-git" 
                href="https://github.com/JordanMarcos" 
                target="_blank"> 
                  <BsGithub  
                  title='lien github du projet' 
                  size={'2rem'} 
                  className="github" >
                  </BsGithub>
                </a>
             </div>

          </div>
        </Carousel> */}
      </div>
     </div>

 </div>
);

// == Export
export default MyProjects;
