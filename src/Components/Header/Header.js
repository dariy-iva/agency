import './Header.css';
import Logo from './Logo/Logo';
import Navigation from "./Navigation/Navigation";

export default function Header() {
  return (
    <header className="header">
      <Logo/>
      <Navigation/>
      <a href="mailto:dashann@mail.ru" className="contact link-hover">contact</a>
    </header>
  );
}
