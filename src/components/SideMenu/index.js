import { connect } from 'react-redux';

import {
  showHome,
  showFavorites,
  showWatchlist,
} from 'containers//MainPage/action';
import { closeSelectedMovie } from 'containers/MainPage/action';

import { SideMenu } from './SideMenu';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  goHomePage: () => dispatch(showHome()),
  goFavPage: () => dispatch(showFavorites()),
  goWatchPage: () => dispatch(showWatchlist()),
  closeSelectedMovie: () => dispatch(closeSelectedMovie()),
});

export const SideMenuView = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideMenu);
