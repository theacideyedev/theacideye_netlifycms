import Head from "next/head"
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '../content/eventi.md';
import Menu from '/pages/menu.js'


export default class Eventi extends Component {
    render() {
        let { title, eventi } = attributes;
        return (
            <div className={styles.container}>
                <Head>
                    <title>The Acid Eye</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Menu />
                <main>
                    <h1 className={styles.title}>
                        Eventi
                    </h1>
                    <EventiContent />
                    <ul>
                        {eventi.map((evento, k) => (
                            <li key={k}>
                                <h2>{evento.description}</h2>
                                <Link href={evento.location}>Clicca qui per vedere la location</Link>
                                <p>Data</p>
                                <p>{new Date(evento.date).getDate()}</p>
                                <p>{new Date(evento.date).getMonth()+1}</p>
                                <p>{new Date(evento.date).getFullYear()}</p>
                                <p>Orario</p>
                                <p>{new Date(evento.date).getHours()}</p>
                                <p>{new Date(evento.date).getMinutes()}</p>
                                <img src={evento.locandina} width={500} height={500}/>
                            </li>
                        ))}
                    </ul>
                </main>

            </div>
        );
    }
}