import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Nav from './Nav';
import "./Layout.css";

function Layout({children}) {
    return (
        <div className='container'>
            <Header />
            <Nav />
            <div className='layout'>
                <div className='contents'>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;