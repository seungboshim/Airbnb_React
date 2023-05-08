import React, { useEffect } from "react";
import PlaceWrap from "./PlaceWrap";
import Place from "./Place";

const styles = {
    wrapper: {
        float: "left",
        display: "flex",
    }
}

const places = [
    {
        name: "Ganggu-myeon",
        view: "바다 전망",
        period: "5월 7일~13일",
        cost: "₩270,300 /박",
    },
    {
        name: "Geoje-myeon",
        view: "바다 전망",
        period: "5월 29일 ~ 6월 3일",
        cost: "₩567,524 /박",
    },
    {
        name: "일본",
        view: "산 및 바다 전망",
        period: "6월 17일~22일",
        cost: "₩657,656 /박",
    },
    {
        name: "일본",
        view: "산 전망",
        period: "5월 1일~7일",
        cost: "₩336,106 /박",
    },
]

function PlaceList(props) {
    useEffect(() => {
        
    }, [])
    
    return (
        <div style={styles.wrapper}>
            {places.map((place)=>{
                return (
                    <Place name={place.name} view={place.view} 
                    period={place.period} cost={place.cost} />
                );
            })}
        </div> 
    );
}

export default PlaceList;