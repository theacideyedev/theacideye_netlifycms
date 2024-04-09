import Head from "next/head"
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '../content/eventi.md';
import Menu from '/pages/components/menu.js'
import Footer from '/pages/components/footer.js'
import Header from "./components/header";
import Zoom from "next-image-zoom";



export default class Eventi extends Component {
    render() {
        let { title, eventi } = attributes;
        console.log(eventi);
        return (
            <div>
                <Head>
                    <title>Eventi - The Acid Eye</title>
                    <meta name='keywords' content='The Acid Eye, Eventi, Marco Radin, Andrea Marcon, Ulisse Chimetto, Acid Rock, Band, Vicenza'/>
                    <meta name='description' content='Tutti gli eventi programmati di The Acid Eye.'/>
                    <meta name='author' content='Andrea Longo, Nicola Cecchetto'/>
                    <meta name='viewport' content='width=device-width, initial-scale=1' />
                    <link rel='icon' type='image/ico' href='/img/logo.ico' />
                    <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
                </Head>
                <Header title="Eventi" />
                <Menu selected="Eventi"/>
                <main>
                    <ul id="eventi">
                        {eventi.map((evento, k) => (
                            <li key={k}>
                                <h2>{evento.description}</h2>
                                <Link href={evento.location}>Clicca qui per vedere la location</Link>
                                <ul>
                                    <li>{new Date(evento.date).getDate()}/{new Date(evento.date).getMonth() + 1}/{new Date(evento.date).getFullYear()}</li>
                                    <li>{(new Date(evento.date).getHours() < 10 ? '0' : '') + new Date(evento.date).getHours()}:{(new Date(evento.date).getMinutes() < 10 ? '0' : '') + new Date(evento.date).getMinutes()}</li>
                                </ul>
                                {
                                    (evento.locandina != undefined && evento.locandina != "" && evento.locandina != null) && <Zoom src={evento.locandina} layout={"fixed"} width={500} height={500} backgroundColor={"#252525"} />
                                }
                            </li>
                        ))}
                    </ul>
                </main>
                <Footer />
            </div>
        );
    }
}