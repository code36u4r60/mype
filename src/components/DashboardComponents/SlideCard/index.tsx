import styles from './styles.module.scss';

export function SlideCard() {
    return (
        <div className={styles.slideCardContainer}>
            <h1>Title</h1>
            <h2>Sub Title</h2>
            <p>Description</p>
            <button className="">
                Show
            </button>
            <button className="">
                Transmit
            </button>
        </div>

    )
}