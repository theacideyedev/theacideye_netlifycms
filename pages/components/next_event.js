import Head from "next/head"
import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '/content/eventi.md';
import Zoom from "next-image-zoom";


export default class Evento extends Component {
    render() {
        let { title, eventi } = attributes;
        const today = new Date();
        //prendo eventi che sono dopo oggi
        let result = eventi.filter(evento => new Date(evento.date).toISOString() > today.toISOString());

        //ordino le date degli eventi che rimangono
        result.sort(function (a, b) {
            var c = new Date(a.date);
            var d = new Date(b.date);
            return c - d;
        });

        const myLoader = ({ src }) => {
            return result[0].locandina
        }
        if (result.length == 0) {
            /*return (
                <>
                    <p>Non ci sono eventi in vista</p>
                </>
            );*/
            return (
                <></>
            );
        } else {
            return (
                <>
                    <h3>Prossimo evento</h3>
                    <p>{result[0].description}</p>
                    <Link href={result[0].location}>Clicca qui per vedere la location</Link>
                    <ul>
                        <li>{new Date(result[0].date).getDate()}/{new Date(result[0].date).getMonth() + 1}/{new Date(result[0].date).getFullYear()}</li>
                        <li>{(new Date(result[0].date).getHours() < 10 ? '0' : '') + new Date(result[0].date).getHours()}:{(new Date(result[0].date).getMinutes() < 10 ? '0' : '') + new Date(result[0].date).getMinutes()}</li>
                    </ul>
                    <div>
                        {
                            result[0].locandina != null && <Zoom src={"/" + result[0].locandina} layout={"fixed"} width={200} height={200} backgroundColor={"#252525"} />
                        }
                    </div>
                    {/*<img src={ result[0].locandina } width={500} height={500}></img>*/}
                </>
            );
        }
    }
}