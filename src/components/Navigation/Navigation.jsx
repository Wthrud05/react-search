import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigtation.module.scss';

const links = [
  { name: 'Comments', to: '/' },
  { name: 'Posts', to: '/posts' },
];

const isActive = ({ isActive }) => (isActive ? styles.Activelink : '');

const Navigation = ({ getCategory }) => {
  return (
    <ul className={styles.Navigation}>
      {links.map((link) => (
        <li className={styles.item} key={link.name}>
          <NavLink
            onClick={() => getCategory(link.name.toLowerCase())}
            className={isActive}
            to={link.to}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
