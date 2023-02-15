import Head from "next/head"
import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '/content/eventi.md';


export default class Evento extends Component {
    render() {   
        let {title, eventi} = attributes;
        const today = new Date();
        //prendo eventi che sono dopo oggi
        let result = eventi.filter(evento => new Date(evento.date).toISOString() > today.toISOString());

        //ordino le date degli eventi che rimangono
        result.sort(function(a, b) {
        var c = new Date(a.date);
        var d = new Date(b.date);
        return c-d;
        });

        const myLoader = ({ src }) => {
            return result[0].locandina
          }

        return(
            <>
            <p>{result[0].description}</p>
            <Link href={result[0].location}>Clicca qui per vedere la location</Link>
            <dl>
                <dt>Data</dt>
                <dd>{new Date(result[0].date).getDate()}/{new Date(result[0].date).getMonth()+1}/{new Date(result[0].date).getFullYear()}</dd>
                <dt>Orario</dt>
                <dd>{new Date(result[0].date).getHours()}:{new Date(result[0].date).getMinutes()}</dd>
            </dl>
            <img src={ result[0].locandina } width={500} height={500}></img>
            </>
        );
    }
}