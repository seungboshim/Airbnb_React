import './Nav.css';

function Nav(){
    return (
        <div className='nav'>
            <div className='slider_wrap'>
                <div className='slider'>
                    <div className='slider_left'>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg'></img>
                            <div className='slider_menu_text'>방</div>
                        </div>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg'></img>
                            <div className='slider_menu_text'>최고의 전망</div>
                        </div>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/51f5cf64-5821-400c-8033-8a10c7787d69.jpg'></img>
                            <div className='slider_menu_text'>한옥</div>
                        </div>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg'></img>
                            <div className='slider_menu_text'>해변 바로 앞</div>
                        </div>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg'></img>
                            <div className='slider_menu_text'>한적한 시골</div>
                        </div>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg'></img>
                            <div className='slider_menu_text'>국립공원</div>
                        </div>
                        <div className='slider_menu_wrap'>
                            <img className='slider_menu_icon' src='https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg'></img>
                            <div className='slider_menu_text'>인기 급상승</div>
                        </div>
                    </div>
                    <div className='slider_right'>
                        <div className='slider_btn_wrap'>
                            <div className='slider_btn'>
                                +
                            </div>
                            <div className='slider_filter'>
                                <div className='slider_filter_wrap'>
                                    <img className='slider_filter_icon' src='https://cdn-icons-png.flaticon.com/512/6488/6488674.png'></img>
                                    <span className='slider_filter_text'>필터</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav;