import Head from "next/head"
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '../content/eventi.md';
import Menu from '/pages/components/menu.js'
import Footer from '/pages/components/footer.js'
import Header from "./components/header";


export default class Eventi extends Component {
    render() {
        let { title, eventi } = attributes;
        return (
            <div>
                <Head>
                    <title>The Acid Eye</title>
                    <link rel="icon" href="/img/logo.ico" />
                    <link href='https://fonts.googleapis.com/css?family=Josefin Sans' rel='stylesheet'></link>
                </Head>
                <Header title="Eventi" />
                <Menu />
                <main>
                    <EventiContent />
                    <ul id="eventi">
                        {eventi.map((evento, k) => (
                            <li key={k}>
                                <h2>{evento.description}</h2>
                                <Link href={evento.location}>Clicca qui per vedere la location</Link>
                                <dl>
                                    <dt>Data</dt>
                                    <dd>{new Date(evento.date).getDate()}/{new Date(evento.date).getMonth() + 1}/{new Date(evento.date).getFullYear()}</dd>
                                    <dt>Orario</dt>
                                    <dd>{new Date(evento.date).getHours()}:{new Date(evento.date).getMinutes()}</dd>
                                </dl>
                                <img src={evento.locandina} width={500} height={500} />
                            </li>
                        ))}
                    </ul>
                </main>
                <Footer />
            </div>
        );
    }
}