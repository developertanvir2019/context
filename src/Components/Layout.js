import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
export const UserContext = createContext([])

const Layout = () => {
    const data = useLoaderData()
    return (
        <UserContext.Provider value={data}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </UserContext.Provider>
    );
};

export default Layout;