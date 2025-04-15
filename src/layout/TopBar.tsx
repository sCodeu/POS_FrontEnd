import React from "react";
import { Link } from "react-router-dom";

const TopBar : React.FC = () => {
    return(
        <nav>
            <Link to = "/home" > Home </Link>
            <Link to = "/sales" > Sales </Link>
            <Link to = "/product" > Product </Link>
            <Link to = "/users" > Users </Link>
        </nav>
    );
}

export default TopBar;