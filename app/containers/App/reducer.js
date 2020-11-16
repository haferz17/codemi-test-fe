/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
  FETCH_ACTIVE_DATA,
  FETCH_ACTIVE_DATA_SUCCESS,
  FETCH_ACTIVE_DATA_ERROR
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  data: null
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_REPOS:
        draft.loading = true;
        draft.error = false;
        draft.userData.repositories = false;
        break;

      case LOAD_REPOS_SUCCESS:
        draft.userData.repositories = action.repos;
        draft.loading = false;
        draft.currentUser = action.username;
        break;

      case LOAD_REPOS_ERROR:
        draft.error = action.error;
        draft.loading = false;
        break;

      case FETCH_ACTIVE_DATA:
        return {
          ...state,
          loading: true,
          error: false
        }
      case FETCH_ACTIVE_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.data
        }
      case FETCH_ACTIVE_DATA_ERROR:
        return {
          ...state,
          loading: false,
          error: true
        }
    }
  });

export default appReducer;
