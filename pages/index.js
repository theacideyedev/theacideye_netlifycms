import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Component } from 'react'
import Next_Event from '/pages/next_event.js';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>The Acid Eye</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 className={styles.title}>
            The Acid Eye
          </h1>
          <h2 className={styles.description}>Home Page</h2>
          <Link href="eventi">Eventi</Link>
          <p>Prossimo evento</p>          
          <Next_Event />

        </main>
      </div>
    );
  }
}
