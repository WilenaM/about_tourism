import Header from "../componets/header";
import Footer from "../componets/footer/footer";
import {Outlet} from "react-router-dom";



function DefaultLayout() {
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>

    )
}

export default DefaultLayout;