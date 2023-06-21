const styles = {
    isLoggedOut: {
        border: "0px solid black",
        borderRadius: 8,
        backgroundColor: "#FEE500",
        height: 36,
        width: 180,
        cursor: "pointer",
        fontWeight: "bold",
        margin: 20,
    },
}

const SocialKakao = ()=>
{
    const Rest_api_key='af96e5d63de8eb37e169486fed401a23' //REST API KEY
    const redirect_uri = 'http://localhost/3000/login/kakao' //Redirect URI
    // oauth 요청 URL
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    return(
    <>
    <button style={styles.isLoggedOut} onClick={handleLogin}>카카오 로그인</button>
    </>
    )
}
export default SocialKakao
