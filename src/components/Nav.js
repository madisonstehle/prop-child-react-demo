import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  let navLinks = [];

  for (let i=0; i<props.links.length; i++) {
    navLinks.push(
      <li key={i}>
        <Link to={props.links[i].url}>
          {props.links[i].displayName}
        </Link>
      </li>
    );
  }

  return (
    <nav className={props.className} style={props.styles}>
      <ul>{navLinks}</ul>
    </nav>
  )
}

export default Nav;