import React from 'react';
import {Button} from "@material-ui/core";
import "./Login.css";
import {auth, provider} from "../firebase"
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = ()=> {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionTypes.SET_USER,
        user: result.user,
      });
    }).catch((error)=>alert(error.message));
  };

  return (
    <div className='login'>
     <div className='login-container'>
       <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsawy7akrlJ9A2MryZK5-v_NHkJlueAFg3kA&usqp=CAU'
        alt=''
       />
         <div className='login-text'>
           <h1>Sign in to whatsapp</h1>
         </div>
        <Button type="submit" onClick={signIn}>
            Sign In With Google
        </Button>
     </div>
    </div>
  );
}

export default Login;