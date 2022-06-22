import './Logo.css';
import logo from '../../../images/logo.svg';

export default function Logo() {
  return (
      <a href='/' className="logo link-hover">
        <img src={logo} alt="logo" className="logo__image"/>
        <span className="logo__text">Agency</span>
      </a>
  );
}