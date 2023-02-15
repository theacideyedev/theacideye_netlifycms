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
            <div className={styles.container}>
                <Head>
                    <title>The Acid Eye</title>
                    <link rel="icon" href="/favicon.ico" />
                    <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
                </Head>
                <Header title="Contatti" />
                <Menu />
                <main>
                    <LinkSocial />
                </main>
                <Footer />
            </div>
        );
    }
}