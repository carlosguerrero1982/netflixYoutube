import React,{useState} from 'react';
import './LoginScreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {

    const [signin, setSignin] = useState(false);


    return (
        <div className="login">
            <div className="loginBackground">
                <img className="login_logo" 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt=""/>

                <button onClick={()=>{setSignin(true)}} className="login_button">SIGN IN </button>

                <div className="login_gradient" />

                
            </div>

            <div className="login_body">

            {signin ? (
                <SignUpScreen />
            ):(

                <>

<h1>Unlimited films, TV programmes and more.</h1>
  <h2>Watch anywhere. Cancel at any time</h2>
  <h3>Ready to watch? Enter your email to create or restart your membership</h3>

  <div className="login_input">

      <form >
          <input type="email"
              placeholder="Email address"

          />

          <button onClick={()=>{setSignin(true)}} className="login_getStarted">
              GET STARTED
          </button>
      </form>
  </div>
</>

            )}
               
            </div>
        </div>
    )
}

export default LoginScreen
