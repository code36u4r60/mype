import styles from './styles.module.scss';
import {SlideCard} from "../SlideCard";

export function Showcase() {
    return (
        <div className={styles.showcaseContainer}>
            <h1>Slides</h1>
            <div className="carousel">
                <SlideCard />
            </div>
        </div>
    )
}