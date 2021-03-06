import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';

import './SideMenu.scss';

export const SideMenu = ({
  goHomePage,
  goFavPage,
  goWatchPage,
  closeSelectedMovie,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHomeClick = () => {
    closeSelectedMovie();
    goHomePage();
    setIsMenuOpen(false);
  };
  const handleFavClick = () => {
    closeSelectedMovie();
    goFavPage();
    setIsMenuOpen(false);
  };
  const handleWatchClick = () => {
    closeSelectedMovie();
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
      <a
        className="menu-item"
        data-testid="side_menu_home"
        onClick={handleHomeClick}
      >
        Home
      </a>
      <a
        className="menu-item"
        data-testid="side_menu_favorite"
        onClick={handleFavClick}
      >
        My Favorites
      </a>
      <a
        className="menu-item"
        data-testid="side_menu_watchlist"
        onClick={handleWatchClick}
      >
        My Watchlist
      </a>
    </Menu>
  );
};

SideMenu.propTypes = {
  goHomePage: PropTypes.func,
  goFavPage: PropTypes.func,
  goWatchPage: PropTypes.func,
  closeSelectedMovie: PropTypes.func,
};
