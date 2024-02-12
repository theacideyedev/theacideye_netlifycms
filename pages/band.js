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
                    <p>The Acid Eye è un gruppo Rock Italiano dalla periferia di Vicenza. Il progetto nasce nel 2020 quando il polistrumentista Jethro Rain incontra e si confronta con il cantante e chitarrista Andrea Marcon e il batterista Ulisse Chimetto.</p>
                    <p>Questi, accomunati dalla necessità di scrivere musica, decidono di rielaborare il sound psichedelico degli anni '60 e '70 con spunti musicali e testi di matrice contemporanea. La risultante è un Acid Rock in pieno stile Doors influenzato da Blues, Funk, Jazz e molto altro ancora.</p>
                    <p>Nel 2022 la band inizia a collaborare con il produttore Davide "Dave" Nicolli. Nello stesso anno il loro singolo "See Me Change" vince il primo premio di un importante concorso nazionale che permette loro di esibirsi al Lumen Festival, raggiungendo anche testate giornalistiche e TV locali.</p>
                    <p>Nel 2023 presentano il loro album di debutto "The Acid Eye" accumulando velocemente migliaia di streams sulle varie piattaforme.</p>
                </main>
                <Footer />
            </div>
        );
    }
}