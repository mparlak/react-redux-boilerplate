import React from "react"
import { Redirect } from "react-router-dom"

import Pages404 from "../pages/error/404"
import Pages500 from "../pages/error/500"

//User
import UserList from "../pages/user/user.list";

const userRoutes = [
  //User
  { path: "/user", component: UserList },
  { path: "/404", component: Pages404 },
  { path: "/500", component: Pages500 },

  { path: "/", exact: true, component: () => <Redirect to="/" /> },
]

export { userRoutes }