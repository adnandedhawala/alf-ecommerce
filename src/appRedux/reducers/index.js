import { combineReducers } from 'redux'
import Loader from './Loader';


const rootReducer = combineReducers({
    loader: Loader,
});

export default rootReducer;