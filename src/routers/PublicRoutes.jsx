import { Route, Routes, Navigate } from "react-router-dom"

import { routes } from "./routes"
import { LoginPage } from "../components/auth/LoginPage"


export const PublicRoutes = () => {

    const { getPublicRoute } = routes

    return <>
        <div>
            <Routes>
                <Route path={ getPublicRoute('login_index') } element={ <LoginPage /> } />

                <Route path="*" element={ <Navigate to={ getPublicRoute('login_index') } replace /> } />
            </Routes>
        </div>
    </>
}