import React,{useState,useEffect} from 'react';
import './Nav.css';

export function Nav() {
    
    const [show, setShow] = useState(false);

    const transitionNav=()=>{

        if(window.scrollY>100){
            setShow(true);
           
        }else{  
            setShow(false);
        }
       
    }

    useEffect(() => {
        window.addEventListener('scroll',transitionNav);

        return () =>{
            window.removeEventListener('scroll', transitionNav);
        }

    }, [])

    return (
        <div className={`nav ${show && 'nav_black'}`}>
        
       <div className="nav_contents">

              <img className="navbar_logo"  src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""/>

             <img className="navbar_avatar"   src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt=""/>       

       </div>
            
    </div>

    )
}

export default Nav