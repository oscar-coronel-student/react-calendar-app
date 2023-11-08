import { Navigate, Route, Routes } from "react-router-dom"

import { routes } from "./routes"
import { Navbar } from "../components/ui/Navbar"

import { CalendarPage } from "../components/calendar/CalendarPage"


export const PrivateRoutes = () => {

    const { getPrivateRoute } = routes

    return <>
        <div>

            <Navbar />

            <Routes>
                <Route path={ getPrivateRoute('home_index') } element={ <CalendarPage /> } />

                <Route path="*" element={ <Navigate to={ getPrivateRoute('home_index') } replace /> }/>
            </Routes>
        </div>
    </>
}