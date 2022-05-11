import { Outlet } from "react-router-dom";
import Announcement from '../components/Announcement'
import Footer from "../components/Footer";
import Header from "../components/Header";

function UserLayout() {
    return (
        <>
            <Announcement />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout;