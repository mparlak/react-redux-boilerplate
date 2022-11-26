import { get, post, put, del } from "../../helpers/api.helper"

export const getAll = (url) => get(url);

export const getUserDetail = (url) => get(url);

export const createUser = (url, data) => post(url, data);

export const updateUser = (url, data) => put(url, data);

export const deleteUser = (url) => del(url);