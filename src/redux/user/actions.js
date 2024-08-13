import UserActionTypes from "./action-types"

export const loginUsers = (payload) => ({
    type: UserActionTypes.LOGIN,
    payload,
})

export const logoutUsers = () => ({
    type: UserActionTypes.LOGOUT,
})