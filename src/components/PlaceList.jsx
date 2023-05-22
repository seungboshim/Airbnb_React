import React, { useEffect, useState } from "react";
import Place from "./Place";

const styles = {
    wrapper: {
        float: "left",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        marginTop: 20,
    },
    mediumWrapper: {
        float: "left",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        marginTop: 20,
    },
    mobileWrapper: {
        float: "left",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        marginTop: 20,
    },
};

const places = [
    {
        id: 1,
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-668146487515150072/original/8ff2a532-e0cd-41a2-9164-554c4d9eb28a.jpeg?im_w=720",
        name: "낭트, 프랑스",
        view: "바다 전망",
        period: "7월 7일~13일",
        cost: "₩124,668 /박",
    },
    {
        id: 2,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "Geoje-myeon",
        view: "바다 전망",
        period: "5월 29일 ~ 6월 3일",
        cost: "₩567,524 /박",
    },
    {
        id: 3,
        img: "https://a0.muscache.com/im/pictures/9a171a31-bc08-4254-98c7-b996121aa32b.jpg?im_w=720",
        name: "일본",
        view: "산 및 바다 전망",
        period: "6월 17일~22일",
        cost: "₩657,656 /박",
    },
    {
        id: 4,
        img: "https://a0.muscache.com/im/pictures/miso/Hosting-26300485/original/ee94e6c1-6ebc-496e-af84-1502edd1b759.jpeg?im_w=720",
        name: "그레이트 런던, 영국",
        view: "호스트: Amelia 님",
        period: "8월 1일~6일",
        cost: "₩96,370 /박",
    },
    {
        id: 5,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 6,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 7,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 8,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 9,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 10,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 11,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
    {
        id: 12,
        img: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-607458038229062130/original/1e20dfc7-ea12-44b2-a837-2bdcd8502133.jpeg?im_w=720",
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
]

function PlaceList(props) {
    const [layout, setLayout] = useState("");

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth; // 현재 브라우저의 가로길이 받음
            if (width >= 1000) {
                setLayout("desktop");
            }
            else if (width >= 750) {
                setLayout("medium");
            }
            else {
                setLayout("mobile");
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return (
        <div>
            {layout === "mobile" ? (
                <div style={styles.mobileWrapper}>
                    {places.map((place)=>{
                        return (
                            <Place key={place.id} img={place.img} name={place.name} view={place.view} 
                            period={place.period} cost={place.cost} />
                        );
                    })}
                </div>
            ) : layout === "medium" ? (
                <div style={styles.mediumWrapper}>
                    {places.map((place)=>{
                        return (
                            <Place key={place.id} img={place.img} name={place.name} view={place.view} 
                            period={place.period} cost={place.cost} />
                        );
                    })}
                </div>
            ) : (
                <div style={styles.wrapper}>
                    {places.map((place)=>{
                        return (
                            <Place key={place.id} img={place.img} name={place.name} view={place.view} 
                            period={place.period} cost={place.cost} />
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default PlaceList;