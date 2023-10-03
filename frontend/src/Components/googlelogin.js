import { GoogleLogin } from 'react-google-login'
require('dotenv').config();

const clientId =  process.env.CLIENTID
function Login(){
    const onSuccess = (res) => {
        console.log("Login success")
    }

    const onFailure = (res) => {
        console.log("Login failed")
    }

    return(
        <div id="signInButton">
             <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={single_host_origin}
                isSignedIn={true}
             />   
        </div>
    )
}

export default Login
