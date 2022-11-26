import { combineReducers } from "redux"

// Front
// import Layout from "./layout/reducer"

// // Authentication
// import Login from "./auth/login/reducer"
// import Account from "./auth/register/reducer"
// import ForgetPassword from "./auth/forgetpwd/reducer"

import userReducer from "./user/reducer"

const rootReducer = combineReducers({
  // Layout,
  // Login,
  // Account,
  // ForgetPassword,
  userReducer
})

export default rootReducer
