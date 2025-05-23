import {lazy} from "react"
import { RouteObject } from "react-router-dom"



const Login = lazy(() => import("../../views/auth/Login"))
const Register = lazy(() => import("../../views/auth/Register"))

export const publicRoutes: RouteObject[] = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]