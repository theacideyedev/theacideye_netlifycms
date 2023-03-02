import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Component } from 'react';
import Menu from '/pages/components/menu.js';
import Footer from '/pages/components/footer.js'
import Header from './components/header';


export default class Band extends Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Band - The Acid Eye</title>
                    <meta name='keywords' content='The Acid Eye, Band, Marco Radin, Andrea Marcon, Ulisse Chimetto, Acid Rock, Vicenza'/>
                    <meta name='description' content='Tutte le curiosità sulla band The Acid Eye e i suoi componenti.'/>
                    <meta name='author' content='Andrea Longo, Nicola Cecchetto'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' type='image/ico' href='/img/logo.ico' />
                    <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
                </Head>
                <Header title="La Band" />
                <Menu selected="Band"/>
                <main>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Dignissim diam quis enim lobortis scelerisque fermentum. Imperdiet massa tincidunt nunc pulvinar. Eu consequat ac felis donec. Blandit volutpat maecenas volutpat blandit. Amet consectetur adipiscing elit ut aliquam purus sit. Tellus id interdum velit laoreet id donec ultrices tincidunt. Amet est placerat in egestas erat imperdiet sed euismod. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada.</p>
                </main>
                <Footer />
            </div>
        );
    }
}