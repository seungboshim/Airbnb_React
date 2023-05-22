import React from "react";
import PlaceWrap from "./PlaceWrap";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
    },
    imageContainer: {},
    image: {
        width: 240,
        height: 240,
        borderRadius: 16,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    boldText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    infoText: {
        color: "gray",
        fontSize: 16,
    },
}

function Place(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src={props.img}
                    style={styles.image}
                />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.boldText}>{props.name}</span>
                <span style={styles.infoText}>{props.view}</span>
                <span style={styles.infoText}>{props.period}</span>
                <span style={styles.boldText}>{props.cost}</span>
            </div>
        </div>
    );
}

export default Place;