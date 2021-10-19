import React, { useContext } from 'react';
import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from '../firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import icon from '../../../Images/google-icon.png';


const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/login" } };
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
          const { displayName, email, photoURL } = result.user;
          const signedInUser = {...loggedInUser, name: displayName, email:email,photoURL:photoURL, isSigned: true };
          // setUserToken()
          setLoggedInUser(signedInUser);
          history.push("/order");
        })
        .catch(function (error) {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      }
    return (
        <div className="login-page">
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-5 text-center">
                    <h1>Shaker</h1>
                    <div className="login-form">
                        <h2>Login with</h2>
                        <button onClick={handleGoogleSignIn} className="d-flex align-items-center justify-content-around btn-style">
                            <div className="google-icon"><img src={icon} alt="" srcset=""/></div>
                            <div><h6>Continue with Google</h6></div>
                        </button>
                        <p className="mt-3">Don't have an account? <span onClick={handleGoogleSignIn} style={{cursor: 'pointer'}} className="text-success">create an account</span></p>
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
};

export default Login;