import React, { useState } from "react";
import './style.css';
import {
    Link
  } from 'react-router-dom';

export default function NotLoggedAlert(){
    const [showAlert, setShowAlert] = useState(!localStorage.getItem("key"))
    if(localStorage.getItem("key") === ""){
       return(<div></div>);
    }else{
        return (
            <div id="alert" style={{display: showAlert ? "block" : "none"}}>
                <div id="alerttitle">You should login!</div>
                <div id="AlertText">To see all the features of the app, you should login to your account! </div>
                <div id="buttons">
                    <button onClick={() => { setShowAlert(false) }}>Continue without registration</button>
                    <Link to={'/authenticate'}><button onClick={() => { setShowAlert(false) }}>Authenticate</button></Link>
                </div>
            </div>
        );

        
    }
}
