import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL
} from "./actionTypes"

import {
    getAll
} from "../../services/users/user.service"

import * as url from "../../helpers/url.helper"

export const getUsers = () => async dispatch => {
    return await getAll(url.GET_USERS).then((response) => {
        return dispatch(getUsersSuccess(response.data.result.items));
    }).catch((error) => {
        dispatch(getUsersFail(error));
    });
}

export const getUsersSuccess = (users) => {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    }
}

export const getUsersFail = error => {
    return {
        type: GET_USERS_FAIL,
        payload: error,
    }
}




