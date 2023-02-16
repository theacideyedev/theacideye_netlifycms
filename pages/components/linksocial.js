import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class LinkSocial extends Component {
    render() {
        return (
            <nav>
                <ul id="linksocial">
                    <li><Link href="https://spoti.fi/3Oytf9f"><img src='/img/spotify.png' alt='spotify'></img><p>Spotify</p></Link></li>
                    <li><Link href="https://deezer.page.link/LScip8WF1brseApc6"><img src='/img/deezer.png' alt='deezer'></img><p>Deezer</p></Link></li>
                    <li><Link href="https://youtube.com/channel/UCHmv77Cw9XbXnK_hHzHcLZg"><img src='/img/youtube.png' alt='youtube'></img><p>Youtube</p></Link></li>
                    <li><Link href="https://bit.ly/InstaTheAcidEye"><img src='/img/instagram.png' alt='instagram'></img><p>Instagram</p></Link></li>
                </ul>
            </nav>
        );
    }
}