import { styled } from "styled-components";
import SocialKakao from "./SocialKakao";
import SocialFacebook from "./SocialFacebook";

const Wrapper = styled.div`
    margin: 0 auto;
    border: 1px solid lightgray;
    border-radius: 20px;
    width: 400px;
    padding: 0 20px;
    text-align: center;
`
const WelcomeText = styled.div`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
`

function SocialLogin() {
    return (
        <Wrapper>
            <WelcomeText>에어비엔비에 오신 것을 환영합니다.</WelcomeText>
            <SocialKakao />
            <SocialFacebook />
        </Wrapper>
    )
}

export default SocialLogin;