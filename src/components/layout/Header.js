import React, { useState } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom'
import Login from '../Login';
import './Header.css';
import { BiSearch } from "react-icons/bi";

function Header(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    const onClickMyPage = () => {
        <div>
            <Link to="/"></Link><br/>
        </div>
    };

    return (
        <div className='headerWrap'>
        <div className='header'>
            <div className='header_right'>
                <img src='https://t1.daumcdn.net/cfile/tistory/993E8E4F5B2385B631' className='logo'></img>
            </div>
            <div className='header_center'>
                <div className='searchbox'>
                    <div className='searchtext'>
                        <span>어디든지</span>
                    </div>
                    <button className='searchbtn'>
                        <BiSearch className='searchbtnIcon' />
                    </button>
                </div>
            </div>
            <div className='header_left'>
                <div className='mypage'>
                <Login
                    isLoggedIn = {isLoggedIn}
                    onClickLogin = {onClickLogin}
                    onClickLogout = {onClickLogout}
                    onClickMyPage = {onClickMyPage}
                />
                <BrowserRouter>

                </BrowserRouter>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Header;