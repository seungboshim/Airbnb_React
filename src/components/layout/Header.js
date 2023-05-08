import React from 'react';
import './Header.css';

function Header(){
    return (
        <div className='headerWrap'>
        <div className='header'>
            <div className='header_right'>
                <img src='https://t1.daumcdn.net/cfile/tistory/993E8E4F5B2385B631' className='logo'></img>
            </div>
            <div className='header_center'>
                <div className='searchbox'>
                    <div className='searchtext'>
                        <span>검색하세요</span>
                    </div>
                    <div className='searchbtn'></div>
                </div>
            </div>
            <div className='header_left'>
                <div className='mypage'>마이페이지</div>
            </div>
        </div>
        </div>
    )
}

export default Header;