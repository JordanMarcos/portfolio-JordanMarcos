// == Import styles
import React, {useState} from 'react';
import './styles.scss';
import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// == Composant
function Header() {

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-container">

    <h1 className="header-name"> <a className="header-name" href="https://www.linkedin.com/in/jordan-marcos/" target="_blank" title="Linkedin"> <span className="header-name-underline" >Jordan Marcos</span></a> </h1>
    
    <div className="header-container-menu">  
      <Link to="#" className="menu-bars">
       <MdOutlineMenu title="menu de navigation" className='bars' onClick={showSidebar} />
      </Link>
    </div>

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}> 
      <ul onClick={showSidebar}>
        <li className='navbar-toggle'>
          <Link to="#" className='menu-bars'>
            <MdClose className='cross'/>
          </Link>
        </li>
        </ul>

        <ul className='nav-menu-items'>
        <li className='nav-text'> 
        
          <HashLink to="#home" smooth>
            <span> Accueil </span>
          </HashLink>
        </li>

        <li className='nav-text'> 
          <HashLink to="#whatIDo" smooth>
            <span> Ce que je fais  </span>
          </HashLink>
        </li>

        <li className='nav-text'> 
          <HashLink to="#whoAmI" smooth>
            <span> Qui je suis </span>
          </HashLink>
        </li>

        <li className='nav-text'> 
          <HashLink to="#myprojects" smooth>
            <span> Mes projets  </span>
          </HashLink>
        </li>

        <li className='nav-text'> 
          <HashLink to="#footer" smooth>
            <span> Me contacter </span>
          </HashLink>
        </li>

      </ul>
    </nav>
    
  </div>
  )
 
};

// == Export
export default Header;
