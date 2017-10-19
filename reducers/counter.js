/* @flow */
import { getDataFromDatabase, postDataToDatabase } from '../lib/counterServices';
import { connect } from 'react-redux';

const SUBMIT_POST = 'SUBMIT_POST';
const CHANGE_TEXT = 'CHANGE_TEXT';
const FETCHING_DATA = 'FETCHING_DATA';
const DATA_ADDED = 'DATA_ADDED';
const INPUT_CHANGED = 'INPUT_CHANGED';
const FILTER_CHANGED = 'FILTER_CHANGED';
const FILTER_SELECTED = 'FILTER_SELECTED';

export default function counter(state = 0, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return { state, data: action.payload, input: '', filter: '' };
        case SUBMIT_POST:
            return { state, postInfo: action.payload, input: '', filter: '' };
        case DATA_ADDED:
            return { state, input: '' };
        case INPUT_CHANGED:
            return { state, input: state.input + action.payload, filter: ''};    
        case FILTER_CHANGED:
            return { state, updatedFilter: action.payload, filter: '' };    
        case FILTER_SELECTED:
            return { state, filter: action.payload };
        default:
            return state;
    }
}

const dataReturned = (data) => ({ type: FETCHING_DATA, payload: data });
const dataAdded = (val) => ({ type: DATA_ADDED, payload: val });
const changeInput = (val) => ({ type: INPUT_CHANGED, payload: val });
const changeFilter = (val) => ({ type: FILTER_CHANGED, payload: val });
const selectFilter = (val) => ({ type: FILTER_SELECTED, payload: val });

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

export const inputChange = (data) => {
    return (dispatch) => {
        dispatch(changeInput(data.destination));
    }
};

export const filterChanged = (data) => {
    console.log('data: ', data);
    return (dispatch) => {
        dispatch(changeFilter(data));
    }
};

export const filterSelected = (data) => {
    console.log('dataaaaaaaaa issue: ', data);
    return (dispatch) => {
        dispatch(selectFilter(data));
    }
};

