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
            <div className={styles.container}>
                <Head>
                    <title>The Acid Eye</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Header title="La Band" />
                <Menu />
                <main>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus venenatis lectus magna fringilla urna. Dignissim diam quis enim lobortis scelerisque fermentum. Imperdiet massa tincidunt nunc pulvinar. Eu consequat ac felis donec. Blandit volutpat maecenas volutpat blandit. Amet consectetur adipiscing elit ut aliquam purus sit. Tellus id interdum velit laoreet id donec ultrices tincidunt. Amet est placerat in egestas erat imperdiet sed euismod. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. In iaculis nunc sed augue lacus viverra vitae congue. Sed augue lacus viverra vitae congue eu. Lacus laoreet non curabitur gravida arcu.</p>
                </main>
                <Footer />
            </div>
        );
    }
}