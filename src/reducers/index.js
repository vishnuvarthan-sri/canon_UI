import { combineReducers} from 'redux';
import cannonReducer from './cannon-reducer';
const rootReducer = combineReducers({
    cannon:cannonReducer,
    
});
export default rootReducer;