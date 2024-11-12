import React from 'react';

const Login = () => {
    const handleGoogleSignIn =()=>{
        console.log('login with google')
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='py-3 px-5 bg-teal-700'>Login with Google</button>
        </div>
    );
};

export default Login;