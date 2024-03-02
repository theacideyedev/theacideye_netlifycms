import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';
import React, {useEffect, useState} from 'react';

export default function Header(props) {

    const [sticky, setSticky] = useState("");

    useEffect(() => {
      var n = Math.ceil(Math.random()*6);
      document.getElementById("bgheader").style.backgroundImage = "url('/img/bg" + n + ".jpeg')";
      //console.log(n);
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }, []);

    const isSticky = () => {
      //console.log("ayo");
      if(window.matchMedia("(min-width: 640px)").matches){
        //sono desktop
        return;
      }
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("bgheader").style.opacity = "0";
        document.getElementById("sticky").style.fontSize = "3em";
        document.getElementById("sticky").style.backgroundColor = "var(--backgroundcolor)";
      } else {
        document.getElementById("sticky").style.fontSize = "8em";
        document.getElementById("sticky").style.backgroundColor = "transparent";
        document.getElementById("bgheader").style.opacity = '100';
      }
      
    };

    let title = props["title"];
    return (
        <>
            <h1 id="sticky">The Acid Eye</h1>
            <div id="bgheader"><p>placeholder</p></div>
            <h2 id="h2title">{title}</h2>
        </> 
    );    
}