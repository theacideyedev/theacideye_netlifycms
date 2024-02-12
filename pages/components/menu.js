import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default function Menu(props) {
    let menuHome = "notSelectedMenu";
    let menuEventi = "notSelectedMenu";
    let menuBand = "notSelectedMenu";
    let menuLink = "notSelectedMenu";
    if(props["selected"] == "Home")
        menuHome = "selectedMenu";
    if(props["selected"] == "Eventi")
        menuEventi = "selectedMenu";
    if(props["selected"] == "Band")
        menuBand = "selectedMenu";
    if(props["selected"] == "Links")
        menuLink = "selectedMenu";  
    return (
        <nav id="menu">
            <input class='checkbox' type='checkbox' name='' id=''/>
            <div class="hamburger-lines">
                <span class="line line1"></span>
                <span class="line line2"></span>
                <span class="line line3"></span>
            </div> 
            <ul>
                <li class={menuHome}><Link href="/">Home</Link></li>
                <li class={menuEventi}><Link href="eventi">Eventi</Link></li>
                <li class={menuBand}><Link href="band">Band</Link></li>
                <li class={menuLink}><Link href="links">Links</Link></li>
            </ul>
        </nav>
    );
}