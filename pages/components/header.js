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
      console.log(window.scrollY);
      if(window.scrollY != 0){
        setSticky("fixedTop");
        
      }else{
        setSticky("");
      }

    };
    

    let title = props["title"];
    return (
        <header>
            <h1 className={sticky}>The Acid Eye</h1>
            <h2>{title}</h2>
        </header> 
    );    
}