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
          <meta name='keywords' content='The Acid Eye, Marco Radin, Andrea Marcon, Ulisse Chimetto, Acid Rock, Band, Vicenza'/>
          <meta name='description' content='Pagina principale della band vicentina The Acid Eye.'/>
          <meta name='author' content='Andrea Longo, Nicola Cecchetto'/>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <link rel='icon' type='image/ico' href='/img/logo.ico' />
          <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
        </Head>
        <Header title="Home Page"/>
        <Menu/>
        
        {//<Hamburger/>
        }
        <main>
          <Next_Event />
        </main>
        <Footer/>
      </div>
    );
  }
}
