import Head from 'next/head'

import styles from '../styles/home.module.scss'
import {Hero} from "../components/HomeComponents/Hero";
import {Features} from "../components/HomeComponents/Features";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | MYPE</title>
            </Head>
            <main className={styles.container}>
                <Hero />
                <Features />
            </main>
        </>
    )
}
