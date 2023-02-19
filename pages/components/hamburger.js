import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class Hamburger extends Component {
    render() {
        return (
            <Link href="pagemenu"><img id="hamburger" src="/img/menu.svg" height="45px" width="45px"></img></Link>
        );
    }
}