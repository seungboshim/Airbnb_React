import React from 'react';
import SocialLogin from '../components/SocialLogin';
import LayoutWithoutNav from '../components/layout/LayoutWithoutNav';


function LoginRoutes() {
    return (
        <LayoutWithoutNav>
            <div>
                <SocialLogin />
            </div>
        </LayoutWithoutNav>
    );
}

export default LoginRoutes;