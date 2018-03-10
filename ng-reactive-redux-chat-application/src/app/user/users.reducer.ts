import { User } from "../model/user-model";
import * as UserActions from "./user.actions";
import { Action } from "redux";
import { createSelector } from "reselect";

/**
 * User State Branch
 * this branch of the state tree could hold information about all of the users
 * This file describes the state concerning Users, how to modify it through
 * the reducer, and the selectors.
 */
export interface UsersState {
    currentUser: User;
}

const initialState: UsersState = {
    currentUser: null
};

export const UsersReducer = (state: UsersState = initialState, action: Action): UsersState => {

    switch (action.type) {
        case UserActions.SET_CURRENT_USER:
            const user: User = (<UserActions.SetCurrentUserAction>action).user;
            return {
                currentUser: user
            };
        default:
            return state;
    }
};

export const getUsersState = (state): UsersState => state.users;

export const getCurrentUser = createSelector(getUsersState, (state: UsersState) => state.currentUser);
