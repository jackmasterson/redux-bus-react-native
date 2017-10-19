/* @flow */
import { getDataFromDatabase, postDataToDatabase } from '../lib/counterServices';
import { connect } from 'react-redux';

const SUBMIT_POST = 'SUBMIT_POST';
const CHANGE_TEXT = 'CHANGE_TEXT';
const FETCHING_DATA = 'FETCHING_DATA';
const DATA_ADDED = 'DATA_ADDED';
const INPUT_CHANGED = 'INPUT_CHANGED';

export default function counter(state = 0, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return { state, data: action.payload, input: '' };
        case SUBMIT_POST:
            return { state, postInfo: action.payload, input: '' };
        case DATA_ADDED:
            return { state, postInfo: action.payload, input: '' };
        case INPUT_CHANGED:
            return { state, input: state.input + action.payload };    
        default:
            return state;
    }
}

const dataReturned = (data) => ({ type: FETCHING_DATA, payload: data });
const dataAdded = (val) => ({ type: DATA_ADDED, payload: val });
const changeInput = (val) => ({ type: INPUT_CHANGED, payload: val });

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
}

