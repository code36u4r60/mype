import Head from "next/head";
import styles from '../styles/404.module.scss'

export default function FourOhFour() {
    return (
        <>
            <Head>
                <title> 404 | MYPE</title>
            </Head>
            <main className={styles.errorContainer}>

                <div className={styles.message}>
                    <h1>Oops!</h1>

                    <p>We can't seem to find the page you're looking for.</p>

                    <a href="/"><button>Go Home</button></a>
                </div>

                <img src="/images/404.svg" alt="Error 404"/>
            </main>
        </>

    )
}


