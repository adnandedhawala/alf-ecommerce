import { settingsConstants } from '../constants';


const initialSettings = {
  collapseSidebar: true,
  showSidebar: false,
  menuKey: 1
};

const PageSettings = (state = initialSettings, action) => {
  switch (action.type) {
    case settingsConstants.TOGGLE_COLLAPSE_SIDEBAR:
      return {
        ...state,
        collapseSidebar: action.data
      };
    case settingsConstants.TOGGLE_SHOW_SIDEBAR:
      return {
        ...state,
        showSidebar: action.data
      };
    case settingsConstants.SET_MENU_KEY:
      return {
        ...state,
        menuKey: action.data
      };
    default:
      return state;
  }
};

export default PageSettings;
