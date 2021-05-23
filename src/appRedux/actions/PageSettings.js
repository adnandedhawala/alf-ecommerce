import { settingsConstants } from '../constants';

export const toggleShowSidebar = (flag) => {
 return (dispatch) => {
  dispatch({
   type: settingsConstants.TOGGLE_SHOW_SIDEBAR,
   data: flag
  });
 }
}

export const setMenuKey = (key) => {
 return (dispatch) => {
  dispatch({
   type: settingsConstants.SET_MENU_KEY,
   data: key
  });
 }
}

