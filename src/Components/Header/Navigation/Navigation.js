import {NavLink} from "react-router-dom";
import './Navigation.css';

export default function Navigation() {
  const navLinks = [
    {text: 'About', path: '/about',},
    {text: 'Services', path: '/services',},
    {text: 'Pricing', path: '/pricing',},
    {text: 'Blog', path: '/blog',},
  ];

  return (
    <nav className="menu">
        {navLinks.map(item => (
          <NavLink
            to={item.path}
            className={(props) =>
              props.isActive
                ? "menu__link link-hover menu__link_active"
                : "menu__link link-hover"
            }
            key={item.text}
          >
            {item.text}
          </NavLink>
        ))}
    </nav>
  );
}