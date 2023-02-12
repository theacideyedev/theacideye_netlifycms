import Head from "next/head"
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '../content/eventi.md';

export default class Eventi extends Component {
    render() {
        let{title, eventi} = attributes;
        return(
            <div className={styles.container}>
                <Head>
                    <title>The Acid Eye</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <main>
                    <h1 className={styles.title}>
                    Eventi
                    </h1>
                    <Link href="/">Home Page</Link>
                    <EventiContent />
                    <ul>
                        {eventi.map((evento, k) => (
                            <li key={k}>
                                <h2>{evento.description}</h2>                                
                                <p>{evento.locandina}</p>
                                <p>{evento.date}</p>
                            </li>
                        ))}
                    </ul>
                </main>

        </div>
        );
    }
}