import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class PreMain extends Component {
    render() {
        return (
            <>
            <div id="whatsapp-div">
                <p>Entra nel nostro gruppo Whatsapp per suonare alla prossima</p>
                <p><strong>"The Acid Eye Blues Jam"</strong></p>
                <a href='https://chat.whatsapp.com/FH3Fw7ebN4U4VF1QBRPmrY' target='_blank'><button id="whatsapp-button">Unisciti al gruppo</button></a>
            </div>
            </>
        );
    }
}