import { types } from "../types/types";

const initialState = {

};

export const calendarReducer = ( state = initialState , action)=>{

    switch (action.type) {
        case types.eventSetActive:
            return {
                ...state,
                activeEvent: action.payload
            }
        default:
            return state;
    }
}