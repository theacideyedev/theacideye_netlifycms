import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';
import React, { useRef, useEffect } from 'react';

export default function Header(props) {
    /*useLayoutEffect */
    useEffect(() => {
      const mainHeader = document.getElementById('logo');
      let fixedTop = 200;
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
          mainHeader.classList.add('fixedTop');
        } else {
          mainHeader.classList.remove('fixedTop');
        }
      }
      window.addEventListener('scroll', fixedHeader);
    }, [])
    
    let title = props["title"];
    return (
        <header>
            <h1 id="logo">The Acid Eye</h1>
            <h2>{title}</h2>
        </header> 
    );    
}