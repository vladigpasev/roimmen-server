import React from "react";
export default function Home(){
    
    if(localStorage.getItem("key") === ""){
        return(<h1>Home</h1>);
     }else{
        return(<div></div>);
     }
}