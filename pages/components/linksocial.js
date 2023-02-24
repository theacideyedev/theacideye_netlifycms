import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';
import Image from 'next/image';


export default class LinkSocial extends Component {
    render() {
        return (
            <nav>
                <ul id="linksocial">
                    <li><Link href="https://spoti.fi/3Oytf9f"><Image src='/img/spotify.webp' alt='spotify' width={200} height={200}/><p>Spotify</p></Link></li>
                    <li><Link href="https://deezer.page.link/LScip8WF1brseApc6"><Image src='/img/deezer.webp' alt='deezer' width={200} height={200}/><p>Deezer</p></Link></li>
                    <li><Link href="https://youtube.com/channel/UCHmv77Cw9XbXnK_hHzHcLZg"><Image src='/img/youtube.webp' alt='youtube' width={200} height={200}/><p>Youtube</p></Link></li>
                    <li><Link href="https://bit.ly/InstaTheAcidEye"><Image src='/img/instagram.webp' alt='instagram' width={200} height={200}/><p>Instagram</p></Link></li>
                </ul>
            </nav>
        );
    }
}