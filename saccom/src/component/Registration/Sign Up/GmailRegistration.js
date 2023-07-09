// import  {useState} from 'react'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';



export default function GmailRegistration() {
    
  return (
    <div>
        <GoogleOAuthProvider clientId="<your_client_id>">...</GoogleOAuthProvider>;
        <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
    </div>
  )
}

