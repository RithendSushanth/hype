import React,{useState} from "react";
import "./signin.css";
import { Link, useNavigate } from "react-router-dom";

// Firebase imports (auth)
import {auth} from "../config/firebase-config";
import {createUserWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        signInWithEmailAndPassword} from "firebase/auth";


export default function Signin() {

  // States to handle authentication
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // For navigation purpose
  const navigate = useNavigate();

  // Handle Authentication
  const register = async() =>{
    // Try to create a user
    try{
      // Create a user
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
    }
    catch(error){
      console.log(error.message)
    }
  }

  const login = async() =>{
    // Try to create a user
    try{
      // Sign in  a user
      const data = await signInWithEmailAndPassword(auth, email, password);
      console.log(data);

      // If logged in
      navigate("/products");
    }
    catch(error){
      console.log(error.message)
    }
  }


  return (
    <>
      <div className="outer-container">
        <div className="signin">Sign in</div>
        <div className="emaildes">
          <div className="email">Email *</div>
          {/* Signin Input */}
          <input type="email" name="email" id="emailbox" onChange={(event)=>{setEmail(event.target.value)}}/>
        </div>

        <div className="passdes">
          <div className="password">Password *</div>
          {/* Password Input */}
          <input type="password" name="password" id="passwordbox" onChange={(event)=>{setPassword(event.target.value)}}/>
        </div>

        <div className="remme">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <div className="rem">Remember me</div>
        </div>

        {/* <div className="sign">
        <Link to="/sigin"><p id="in">Sign in</p></Link>
        </div> */}

        {/* Signin Button */}
        <input type="button" value="Sign in" id="sign" color="white" onClick={login}/>
        <div className="imp">
          <Link to="/sigin" id="forgetpass">
            Forgotten your password?
          </Link>
          <div className="noacc">
            No Account?<Link to="/sigin">Sign up</Link>{" "}
          </div>
          <div className="google">

          <input type="button" value="Sign up" id="signup" color="white" onClick={register} />
            {/* <Link to="/sigin">
              <img
                className="google-signin"
                id="img"
                src={require("./google.png")}
                alt="google"
              />{" "}
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
