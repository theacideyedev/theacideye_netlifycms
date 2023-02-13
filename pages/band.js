import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Component } from 'react';
import Menu from '/pages/menu.js';


export default class Home extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>The Acid Eye</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Menu />
                <main>
                    <h1 className={styles.title}>
                        The Acid Eye
                    </h1>
                    <h2 className={styles.description}>La Band</h2>
                </main>
            </div>
        );
    }
}