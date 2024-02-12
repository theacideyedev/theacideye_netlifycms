import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Component } from 'react';
import Menu from '/pages/components/menu.js';
import LinkSocial from '/pages/components/linksocial.js';
import Footer from '/pages/components/footer.js'
import Header from './components/header';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Links - The Acid Eye</title>
                    <meta name='keywords' content='The Acid Eye, Marco Radin, Andrea Marcon, Ulisse Chimetto, Acid Rock, Band, Vicenza'/>
                    <meta name='description' content='Tutti i link per ascoltare le canzoni di The Acid Eye e per comunicare con la band.'/>
                    <meta name='author' content='Andrea Longo, Nicola Cecchetto'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' type='image/ico' href='/img/logo.ico' />
                    <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
                </Head>
                <Header title="Links" />
                <Menu  selected="Links"/>
                <main>
                    <LinkSocial />
                </main>
                <Footer />
            </div>
        );
    }
}