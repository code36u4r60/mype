import styles from './styles.module.scss';

export function InformationBar() {
    return (
        <div className={styles.informationBarContainer}>
            <ul>
                <li>
                    <h2 className={styles.amount}>300</h2>
                    <p className={styles.description}>Published</p>
                </li>
                <li>
                    <h2 className={styles.amount}>24</h2>
                    <p className={styles.description}>Pending Publications</p>
                </li>
                <li>
                    <h2 className={styles.amount}>49</h2>
                    <p className={styles.description}>Events Today</p>
                </li>
                <li>
                    <h2 className={styles.amount}>3</h2>
                    <p className={styles.description}>Messages</p>
                </li>
            </ul>

        </div>
    )
}