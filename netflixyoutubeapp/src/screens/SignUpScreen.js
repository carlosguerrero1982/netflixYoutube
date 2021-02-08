import React,{useRef} from 'react';
import './SignUpScreen.css';
import {auth} from '../firebase';

function SignUpScreen() {


   const emailref = useRef(null);
   const passwordref = useRef(null);

    const register=(e)=>{

        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value
            ).then((authUser)=>{

                console.log(authUser);

            }).catch(error=>alert(error.message))

    }

    const signin=(e)=>{

        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailref.current.value,
            passwordref.current.value

        ).then((authUser)=>{

            console.log(authUser);

        }).catch(error=>alert(error.message))
        
    }



    return (
        <div className="signup">
            <form>
                <h1>Sign In</h1>
                <input ref={emailref} type="email" placeholder="Email"/>
                <input ref={passwordref} type="password" placeholder="Password"/>
                <button onClick={signin} type="submit">Sign In</button>

                <h4>
                <span className="signupgray">New to Netflix? </span>
                <span className="signuplink" onClick={register}>Sign Up now.</span></h4>
                
            </form>
        </div>
    )
}

export default SignUpScreen
