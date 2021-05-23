import { combineReducers } from 'redux'
import Loader from './Loader';
import PageSettings from './PageSettings';


const rootReducer = combineReducers({
    loader: Loader,
    settings:PageSettings
});

export default rootReducer;