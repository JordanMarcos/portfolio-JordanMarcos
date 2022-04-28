// == Import styles
import './styles.scss';
import { BsGithub, BsLinkedin, BsFillCloudDownloadFill } from "react-icons/bs";


// == Composant
const Footer = () => (

<section id="footer">
  <div className="footer-container">

    <div className="footer-mail-container">
      <a className="footer-mail" href="mailto:jordan.marcos.santiago@gmail.com">jordan.marcos.santiago@gmail.com</a>
    </div>

    <div className="footer-icons-container" >
      <div className="github-icon">
       <a href="https://github.com/JordanMarcos" target="_blank"> <BsGithub  size={'1.8rem'} className="github" ></BsGithub>  </a>
      </div>

      <div className="linkedin-icon">
       <a href="https://www.linkedin.com/in/jordan-marcos/" target="_blank"> <BsLinkedin className="linkedin" size={"1.8rem"} color={'#A1A1A1'} ></BsLinkedin>  </a>
      </div>

      <div className="download-icon">
       <a href="https://docdro.id/tjWHTyv" target="_blank"> <BsFillCloudDownloadFill className="download" size={"1.8rem"} color={'#A1A1A1'} ></BsFillCloudDownloadFill>  </a>
      </div>
     </div>

  </div>
</section>
);

// == Export
export default Footer;
