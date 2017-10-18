/* @flow */
import {getDataFromDatabase, postDataToDatabase} from '../lib/counterServices';
import {connect} from 'react-redux';

const SUBMIT_POST = 'SUBMIT_POST';
const CHANGE_TEXT = 'CHANGE_TEXT';
const FETCHING_DATA = 'FETCHING_DATA';
const DATA_ADDED='DATA_ADDED';

export default function counter(state = 0, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return {state, data: action.payload};
        case SUBMIT_POST:
            return {state, postInfo: action.payload};
        case DATA_ADDED:
            return {state, postInfo: action.payload};
        default:
            return state;
    }
}

const dataReturned = (data) => ({ type: FETCHING_DATA, payload: data });
const dataAdded = (val) => ({ type: DATA_ADDED, payload: val });

export const fetchData = () => {
    return (dispatch) => {
        getDataFromDatabase()
            .then(res => dispatch(dataReturned(res)));
    }
}

export const submitPost = (data) => {
    console.log(data);
    return (dispatch) => {
        postDataToDatabase(data);
        dispatch(dataAdded(data));
    }
};
