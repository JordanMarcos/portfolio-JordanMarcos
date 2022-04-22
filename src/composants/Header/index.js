// == Import styles
import React, {useState} from 'react'
import './styles.scss';
import { MdOutlineMenu } from 'react-icons/md';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

// == Composant
function Header() {

  const [sidebar, setSidebar] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="header-container">
    <h1 className="header-name"> <a href="https://www.linkedin.com/in/jordan-marcos/" target="_blank" title="Linkedin"> <span className="header-name-underline" >Jordan</span>  Marcos </a> </h1>
    
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
          <Link to="#">
            <span> Accueil </span>
          </Link>
        </li>

        <li className='nav-text'> 
          <Link to="#">
            <span> Qui je suis  </span>
          </Link>
        </li>

        <li className='nav-text'> 
          <Link to="#">
            <span> Mes compétences  </span>
          </Link>
        </li>

        <li className='nav-text'> 
          <Link to="#">
            <span> Mes projets  </span>
          </Link>
        </li>

        <li className='nav-text'> 
          <Link to="#">
            <span> Me contacter </span>
          </Link>
        </li>

      </ul>
    </nav>
    
  </div>
  )
 
};

// == Export
export default Header;
