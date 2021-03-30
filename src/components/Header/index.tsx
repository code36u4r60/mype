import styles from './styles.module.scss'
import {SignInButton} from "../SignInButton";

export function Header() {

    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <a href="/" className={styles.brand}>
                    MYPE
                </a>
                <SignInButton/>
            </div>
        </header>
    )

}