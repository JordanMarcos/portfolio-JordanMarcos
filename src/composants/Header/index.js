// == Import styles
import './styles.scss';
import { MdOutlineMenu } from 'react-icons/md';

// == Composant
const Header = () => (
  <div className="header-container">
    <h1 className="header-name"> <a href="https://www.linkedin.com/in/jordan-marcos/" target="_blank"> <span className="header-name-underline">Jordan</span>  Marcos </a> </h1>
    <div className="header-container-menu">
      <MdOutlineMenu size="3em" color='#565656' title="menu icon"/>
    </div>
    
  </div>
);

// == Export
export default Header;
