import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';
import Image from 'next/image';


export default class LinkSocial extends Component {
    render() {
        return (
            <nav>
                <ul id="linksocial">
                    <li><a href="https://open.spotify.com/artist/6ubMuyMbeOZBAjbSyZHUaw" target="_blank"><Image src='/img/spotify.webp' alt='spotify' width={200} height={200}/><p>Spotify</p></a></li>
                    <li><a href="https://music.apple.com/us/artist/the-acid-eye/1613338561" target="_blank"><Image src='/img/apple-music.png' alt='apple music' width={200} height={200}/><p>Apple Music</p></a></li>
                    <li><a href="https://youtube.com/channel/UCHmv77Cw9XbXnK_hHzHcLZg" target="_blank"><Image src='/img/youtube.jpeg' alt='youtube' width={200} height={200}/><p>Youtube</p></a></li>
                    <li><a href="https://bit.ly/InstaTheAcidEye" target="_blank"><Image src='/img/instagram.webp' alt='instagram' width={200} height={200}/><p>Instagram</p></a></li>
                </ul>
            </nav>
        );
    }
}