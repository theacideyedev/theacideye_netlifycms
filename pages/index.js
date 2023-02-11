import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Acid Eye</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          The Acid Eye
        </h1>
        <h2 className={styles.description}>Home Page</h2>
        <Link href="eventi">Eventi</Link>
      </main>
    </div>
  )
}
