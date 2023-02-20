import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Component } from 'react'
import Next_Event from '/pages/components/next_event.js';
import Menu from '/pages/components/menu.js'
import Footer from '/pages/components/footer.js'
import Header from './components/header';
import Hamburger from './components/hamburger';


export default class Home extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>The Acid Eye</title>
          <link rel="icon" href="/img/logo.ico" />
          <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
        </Head>
        <Header title="Home Page"/>
        {//<Menu/>
        }
        <Hamburger/>
        <main>
          <Next_Event />
        </main>
        <Footer/>
      </div>
    );
  }
}
