'use strict';
import {fetchUserAsync, setUser} from '@actions/usersActions';
import {User} from '../types';
import {createReducer} from 'typesafe-actions';
import {UsersAction} from '@actions/actionTypes';

export interface UsersState {
  user?: User;
}

const initialState: UsersState = {};

const usersReducer = createReducer<UsersState, UsersAction>(initialState)
  .handleAction(fetchUserAsync.success, (state, action) => ({...state, user: action.payload}))
  .handleAction(setUser, (state, action) => ({...state, user: action.payload}));

export default usersReducer;