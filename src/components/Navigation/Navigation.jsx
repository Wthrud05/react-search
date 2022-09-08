import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigtation.module.scss';

const Navigation = ({ getCategory }) => {
  const links = [
    { name: 'Comments', to: '/react-search' },
    { name: 'Posts', to: '/posts' },
  ];

  const isActive = ({ isActive }) => (isActive ? styles.Activelink : '');

  return (
    <ul className={styles.Navigation}>
      {links.map((link) => (
        <li key={link.name}>
          <NavLink
            name={link.name}
            className={isActive}
            to={link.to}
            onClick={() => getCategory(link.name.toLowerCase())}>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
