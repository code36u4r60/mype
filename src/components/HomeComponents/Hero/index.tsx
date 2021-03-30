import styles from "./styles.module.scss";

export function Hero() {

    return (
        <section className={styles.hero}>

            <div className={styles.side}>
                <span>👏 Hey, welcome</span>
                <h1>This is <span>MYPE</span> project.</h1>
                <h2>Our mission is to make your presentation very easy!</h2>
                <div className={styles.divider}/>
                <p>MYPE is an academic project. <br/>
                    Created by Eduardo Queirós with ❤️</p>
            </div>

            <img className={styles.avatar} src="/images/mulher.svg" alt="Girl Avatar"/>
        </section>
    )
}