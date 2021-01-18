import { combineReducers } from 'redux';
import raceTypeReducer from './raceType';

const allReducers = combineReducers({
    raceTypes: raceTypeReducer
}
);

export default allReducers