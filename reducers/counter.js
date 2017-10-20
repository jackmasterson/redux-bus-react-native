/* @flow */
import { getDataFromDatabase, postDataToDatabase } from '../lib/counterServices';
import { connect } from 'react-redux';

const initialState = {
    postInfo: {
        date: new Date(),
        time: '',
        location: '',
        destination: '',
        issue: '',
    }
}

const SUBMIT_POST = 'SUBMIT_POST';
const CHANGE_TEXT = 'CHANGE_TEXT';
const FETCHING_DATA = 'FETCHING_DATA';
const DATA_ADDED = 'DATA_ADDED';
const INPUT_CHANGED = 'INPUT_CHANGED';
const FILTER_CHANGED = 'FILTER_CHANGED';
const FILTER_SELECTED = 'FILTER_SELECTED';
const FILTER_RESET = 'FILTER_RESET';

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {...state, postInfo: action.payload };
        case SUBMIT_POST:
            return {...state, postInfo: action.payload };
        case DATA_ADDED:
            return {...state };
        case INPUT_CHANGED:
            return {...state, postInfo: {...action.payload}};    
        case FILTER_CHANGED:
            return {...state, filter: action.payload };    
        case FILTER_SELECTED:
            return {...state, filterSelected: action.payload };
        case FILTER_RESET:
            return {...state, filterSelected: action.payload };
        default:
            return state;
    }
}

const dataReturned = (data) => ({ type: FETCHING_DATA, payload: data });
const dataAdded = (val) => ({ type: DATA_ADDED, payload: val });
const changeInput = (val) => ({ type: INPUT_CHANGED, payload: val });
const changeFilter = (val) => ({ type: FILTER_CHANGED, payload: val });
const selectFilter = (val) => ({ type: FILTER_SELECTED, payload: val });
const filterReset = (val) => ({ type: FILTER_RESET, payload: val });

export const fetchData = () => {
    return (dispatch) => {
        getDataFromDatabase()
            .then(res => dispatch(dataReturned(res)));
    }
};

export const submitPost = (data) => {
    return (dispatch) => {
        postDataToDatabase(data);
        dispatch(dataAdded(data));
    }
};

export const inputChange = (text, field) => {
    let newObject = Object.assign(initialState);
    newObject.postInfo[field] = text;

    return (dispatch) => {
        // was data.destination-> will cause a bug somewhere
        dispatch(changeInput(newObject.postInfo));
    }
};

export const filterChanged = (data) => {
    return (dispatch) => {
        dispatch(changeFilter(data));
    }
};

export const filterSelected = (data) => {
    return (dispatch) => {
        dispatch(selectFilter(data));
    }
};

export const resetFilter = (data) => {
    return (dispatch) => {
        dispatch(filterReset(data));
    }
}

