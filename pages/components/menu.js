import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class Menu extends Component {
    render() {
        return (
            <nav id="menu">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="eventi">Eventi</Link></li>
                    <li><Link href="band">Band</Link></li>
                    <li><Link href="contatti">Contatti</Link></li>
                </ul>
            </nav>
        );
    }
}