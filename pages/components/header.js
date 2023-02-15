import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default function Header(props) {
    let title = props["title"];
    return (
        <header>
            <h1 className={styles.title}>The Acid Eye</h1>
            <h2 className={styles.description}>{title}</h2>
        </header> 
    );    
}