import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Component } from 'react'
import Menu from '/pages/components/menu.js'
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
        <Header title="Menu"/>
        <Menu/>
      </div>
    );
  }
}
