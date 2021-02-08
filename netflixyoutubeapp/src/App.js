import React,{useEffect} from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import {auth} from './firebase';
import {useDispatch,useSelector} from "react-redux";
import {login, logout,selectUser} from './features/userSlice'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    
    const unsuscribe = auth.onAuthStateChanged((AuthUser)=>{

      if(AuthUser){

        console.log(AuthUser);
        dispatch(login({
          uid:AuthUser.uid,
          email:AuthUser.email,
        }))
      }else{

        dispatch(logout());
      }
    })

    return unsuscribe;
  }, [dispatch]);

  return (
    <div className="app">

      <Router>
     
      {!user ? (

        <LoginScreen />
        
      ):(

        <Switch>
         

        <Route exact path="/profile">
            
            <ProfileScreen />

          </Route>


        
          <Route exact path="/">
            
            <HomeScreen />

          </Route>



        </Switch>

      )}

      
    </Router>

    </div>
  );
}

export default App;
