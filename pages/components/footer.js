import styles from '/styles/Home.module.css';
import Link from "next/link";
import { Component } from 'react';


export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>The Acid Eye</p>
                <p>Creato da Andrea Longo & Nicola Cecchetto</p>
            </footer>            
        );
    }
}