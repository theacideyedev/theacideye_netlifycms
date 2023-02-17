import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';
import React, {useEffect, useState} from 'react';

export default function Header(props) {

    const [sticky, setSticky] = useState("");

    useEffect(() => {
      console.log("hello");
      window.addEventListener("scroll", isSticky);
      return () => {
        window.removeEventListener("scroll", isSticky);
      };
    }, []);

    const isSticky = () => {
      console.log("ayo");
      if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("sticky").style.fontSize = "4em";
      } else {
        document.getElementById("sticky").style.fontSize = "8em";
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