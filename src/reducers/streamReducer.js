import {  
    CREATE_STREAM,
    FETCH_STREAM,
    FETCH_STREAMS,
    DELETE_STREAM,
    EDIT_STREAM } from '../actions/types';

const streamReducer = (state={}, action) => {
    switch (action.type) {
        case EDIT_STREAM:
            return {};
        default:
            return state;
    }
};