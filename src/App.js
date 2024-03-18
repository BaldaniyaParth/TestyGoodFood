import Header from "./component/Header";
import Footer from "./component/Footer";
import Body from "./component/Body";
import About from "./component/About";
import ContactUs from "./component/ContactUs";
import PageNotFound from "./component/PageNotFound";
import RestaurantMenu from "./component/RestaurantMenu";
import { createBrowserRouter, Outlet } from "react-router-dom";

const AppLayout = () => {
    return(
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    )
}

const AppRoute = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <PageNotFound />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <About />
            },
            {
                path : "/contact",
                element : <ContactUs />
            },
        ]
    }
])

export default AppRoute;