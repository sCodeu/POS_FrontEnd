import React from "react";
import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import User from "./pages/Users/Users";
import Product from "./pages/Product/Product";
import Sales from "./pages/Sales/Sales";
import Home from "./pages/Home/Home";
import ProtectedRoute from "./layout/ProtectedRoute";
import Layout from "./layout/Layout";
import RoleBasedRoute from "./layout/RoleBasedRoute";

const Router : React.FC = () => {
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {<Login/>} />
            <Route path = "/" element = {
                <ProtectedRoute>
                    <Layout/>
                </ProtectedRoute>
            }
            />
        {/*child elements*/}
            <Route path = "home" element = {
                <RoleBasedRoute allowedRoles = {['admin' , 'user']} >
                    <Home/>
                </RoleBasedRoute>
            }
            />
            <Route path = "users" element = {
                <RoleBasedRoute allowedRoles = {['admin']} >
                    <User/>
                </RoleBasedRoute>
            }
            />
            <Route path = "products" element = {
                <RoleBasedRoute allowedRoles = {['admin' , 'user']}>
                    <Product/>
                </RoleBasedRoute>
            }
            />
            <Route path = "sales" element = {
                <RoleBasedRoute allowedRoles = {['admin' , 'user']}>
                    <Sales/>
                </RoleBasedRoute>
            }
            />
            <Route path = "*" element = {<Navigate to = "/" />} />

        </Routes>
        </BrowserRouter>
    );
}

export default Router;