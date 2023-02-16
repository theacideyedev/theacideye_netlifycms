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
      <div className={styles.container}>
        <Head>
          <title>The Acid Eye</title>
          <link rel="icon" href="/img/logo.ico" />
          <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
        </Head>
        <Header title="Home Page"/>
        <Menu/>
        <main>    
            <h3>Prossimo evento</h3>  
          <Next_Event />
        </main>
        <Footer/>
      </div>
    );
  }
}
