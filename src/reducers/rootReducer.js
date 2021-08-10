import { combineReducers } from 'redux';
import { uiReducer } from './uiReducers';


export const rootReducer = combineReducers({
    ui: uiReducer,
});

