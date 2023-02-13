import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class LinkSocial extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link href="https://spoti.fi/3Oytf9f">Spotify</Link></li>
                    <li><Link href="https://deezer.page.link/LScip8WF1brseApc6">Deezer</Link></li>
                    <li><Link href="https://youtube.com/channel/UCHmv77Cw9XbXnK_hHzHcLZg">Youtube</Link></li>
                    <li><Link href="https://bit.ly/InstaTheAcidEye">Instagram</Link></li>
                </ul>
            </nav>
        );
    }
}