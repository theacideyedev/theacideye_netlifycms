import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class Menu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link href="/">Home Page</Link></li>
                    <li><Link href="eventi">Eventi</Link></li>
                    <li><Link href="band">La Band</Link></li>
                    <li><Link href="contatti">Contatti</Link></li>
                </ul>
            </nav>
        );
    }
}