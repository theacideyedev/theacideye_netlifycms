import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Component } from 'react'
import Next_Event from '/pages/components/next_event.js';
import Menu from '/pages/components/menu.js'
import Footer from '/pages/components/footer.js'
import Header from './components/header';

export default class Home extends Component {
  render() {
    return (
      <>
      <div className={styles.background}>
        <div className={styles.blurback}></div>
      </div>
      <div className={styles.page}>
      <div className={styles.container}>
        <Head>
          <title>The Acid Eye</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header title="Home Page"/>
        <Menu/>
        <main>
          <div className={styles.firstpage}>          
            <p>Prossimo evento</p>          
          </div>
          <Next_Event />
        </main>
        <Footer/>
      </div>
      </div>
      </>
    );
  }
}
