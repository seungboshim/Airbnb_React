import React from 'react';
import Footer from './Footer';
import Header from './Header';
import "./Layout.css";

function LayoutWithoutNav({children}) {
    return (
        <div className='container'>
            <Header />
            <div className='layout'>
                <div className='contents'>{children}</div>
            </div>
            <Footer />
        </div>
    );
}

export default LayoutWithoutNav;