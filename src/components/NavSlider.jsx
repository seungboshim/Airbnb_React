import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Nav from "./Nav.jsx";

const NavSlider = ({ navLists }) => {
    const [slidePx, setSlidePx] = useState(0);

    const toPrev = () => {
        if (slidePx < 0) setSlidePx(slidePx + 300);
    };

    const toNext = () => {
        if (slidePx > -2750) setSlidePx(slidePx - 300);
    };

    if (!navLists)return (
        <div>
            <div>
                {navLists.map(navList => {
                    <Nav slide={slidePx} key={navList.id} />
                })}
            </div>
            <div
                onClick={toPrev}
                style={{display: slidePx === 0 ? "none" : ""}}
            >
                <FaChevronLeft />
            </div>
            <div
                onClick={toNext}
                style={{display: slidePx === -2750 ? "none" : ""}}
            >
                <FaChevronRight />
            </div>
        </div>
    );
};

export default NavSlider;