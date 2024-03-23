import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import PageNotFound from "./component/PageNotFound";
import RestaurantMenu from "./component/RestaurantMenu";
import Help from "./component/Help";
import Login from "./component/Login";

// AppLayout component for overall layout structure
const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}

// AppRoute configuration for routing setup
const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <PageNotFound />,
        children: [
            { path: "/", element: <Body /> },
            { path: "/about", element: <About /> },
            { path: "/contact", element: <ContactUs /> },
            { path: "/help", element: <Help /> },
            { path: "/restaurant/:resId", element: <RestaurantMenu /> },
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
]);

export default AppRoute;
