import Head from "next/head"
import styles from '../styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react'
import { attributes, react as EventiContent } from '../content/eventi.md';
import Image from "next/image";



/*
export function getClosestEvent(){
    let {title, eventi} = attributes;
    const today = new Date();
    let result = eventi.filter(evento => evento.date > today);
    return result;
}*/

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
            <p>Data</p>
            <p>{new Date(result[0].date).getDate()}</p>
            <p>{new Date(result[0].date).getMonth()+1}</p>
            <p>{new Date(result[0].date).getFullYear()}</p>
            <p>Orario</p>
            <p>{new Date(result[0].date).getHours()}</p>
            <p>{new Date(result[0].date).getMinutes()}</p>
            <Image src={ "/../public/" + result[0].locandina } width={500} height={500} ></Image>
            </>
        );
    }
}