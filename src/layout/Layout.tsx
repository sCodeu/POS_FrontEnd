import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";

const Layout : React.FC = () => {
    return(
        <div>
        <TopBar/>
        <main>
            <Outlet/>
        </main>
        </div>

    );
}

export default Layout;