import React from "react";
import { CgProfile } from "react-icons/cg";
import { FaChevronLeft } from "react-icons/fa";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
    },
    greeting: {
        marginRight: 8,
    },
    isLoggedIn: {
        border: "1px solid lightgray",
        borderRadius: 48,
        backgroundColor: "white",
        height: 36,
        width: 100,
        cursor: "pointer",
        fontWeight: "bold",
    },
    isLoggedOut: {
        border: "1px solid lightgray",
        borderRadius: 48,
        backgroundColor: "white",
        height: 36,
        width: 80,
        cursor: "pointer",
        fontWeight: "bold",
    },
    myPage: {
        border: "1px solid lightgray",
        borderRadius: 48,
        backgroundColor: "white",
        height: 36,
        width: 36,
        marginRight: 12,
    }
};

function Login(props) {
    const { isLoggedIn, onClickLogin, onClickLogout, onClickMyPage } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}></span>}
        
            {isLoggedIn ? (
                <div>
                    <button type="button" style={styles.myPage} onClick={onClickMyPage}>
                        <CgProfile />
                    </button>
                    <button type="button" style={styles.isLoggedIn} onClick={onClickLogout}>로그아웃</button>
                </div>
            ) : (
                <button type="button" style={styles.isLoggedOut} onClick={onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Login;