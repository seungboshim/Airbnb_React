import React from "react";

const navList = [
    {
        id: 1,
        icon: 'https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg',
        name: "방",
    },
]

const Nav = ({ navList, slide }) => {
    const {id, icon, name} = navList;
    return (
        <li
            className="nav"
            id={id}
            style={{
                transform: `translateX(${slide}px)`,
                transition: "0.5s ease",
            }}>
        </li>
    )
}

export default Nav;