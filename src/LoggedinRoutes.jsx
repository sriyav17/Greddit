import { Navigate, Outlet } from "react-router-dom";

const LoggedInRoute = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return(
        isLoggedIn ? <Navigate to="/profile" /> : <Outlet />
    )
};
export default LoggedInRoute;