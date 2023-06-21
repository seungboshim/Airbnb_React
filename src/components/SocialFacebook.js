const styles = {
    isLoggedOut: {
        border: "0px solid black",
        borderRadius: 8,
        backgroundColor: "#4267b2",
        color: "white",
        height: 36,
        width: 180,
        cursor: "pointer",
        fontWeight: "bold",
        margin: 20,
    },
}

const SocialFacebook = () => {
    return(
        <>
        <button style={styles.isLoggedOut}>페이스북 로그인</button>
        </>
    )
}

export default SocialFacebook;