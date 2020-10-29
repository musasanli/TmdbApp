import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

import './SideMenu.scss';

export const SideMenu = ({ goHomePage, goFavPage, goWatchPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    goHomePage();
    setIsMenuOpen(false);
  };
  const handleFavClick = () => {
    goFavPage();
    setIsMenuOpen(false);
  };
  const handleWatchClick = () => {
    goWatchPage();
    setIsMenuOpen(false);
  };
  const handleOnOpen = () => {
    setIsMenuOpen(true);
  };
  const handleOnClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <Menu
      className="SideMenu"
      isOpen={isMenuOpen}
      onOpen={handleOnOpen}
      onClose={handleOnClose}
    >
      <a className="menu-item" onClick={handleHomeClick}>
        Home
      </a>
      <a className="menu-item" onClick={handleFavClick}>
        My Favorites
      </a>
      <a className="menu-item" onClick={handleWatchClick}>
        My Watchlist
      </a>
    </Menu>
  );
};

SideMenu.propTypes = {
  goHomePage: PropTypes.func,
  goFavPage: PropTypes.func,
  goWatchPage: PropTypes.func,
};
