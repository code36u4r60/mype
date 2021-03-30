import styles from './styles.module.scss'
import Head from 'next/head'

import {InformationBar} from "../../components/DashboardComponents/InformationBar";
import {Showcase} from "../../components/DashboardComponents/Showcase";

interface DashboardProps {
    product: {
        priceId: string;
        amount: number;
    }
}

export default function Dashboard({product}: DashboardProps) {
    return (
        <>
            <Head>
                <title>Dashboard | MYPE</title>
            </Head>
            <main className={styles.contentContainer}>
                <InformationBar />
                <Showcase />
            </main>
        </>
    )
}


