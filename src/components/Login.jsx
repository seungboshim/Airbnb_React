import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import SocialKakao from "./SocialKakao";

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
        cursor: "pointer",
    }
};

function Login(props) {
    const { isLoggedIn, onClickLogin, onClickLogout } = props;

    return (
        <div style={styles.wrapper}>
            {isLoggedIn && <span style={styles.greeting}></span>}
        
            {isLoggedIn ? (
                <div>
                    <Link to="../../pages/MyPage">
                        <button type="button" style={styles.myPage}>
                            <CgProfile />
                        </button>
                    </Link>
                    <button type="button" style={styles.isLoggedIn} onClick={onClickLogout}>로그아웃</button>
                </div>
            ) : (
                <div>
                    <Link to="../../pages/LoginRoutes">
                        <button type="button" style={styles.isLoggedOut} onClick={onClickLogin}>로그인</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Login;