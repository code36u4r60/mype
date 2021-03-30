import styles from './styles.module.scss';
import {RiSlideshowLine, RiArticleLine, RiBook2Line, RiTrademarkFill} from 'react-icons/ri'
import {MdGTranslate} from 'react-icons/md'

export function Features(){
    return(
        <article className={styles.features}>

            <header className={styles.title}>Find out what we have to offer</header>

            <div className={styles.creator}>
                <img className={styles.avatar} src="/images/contentCreator.svg" alt="Content Craetor Avatar"/>
                <div className={styles.description}>
                    <h2>You can create your text content in different formats</h2>
                    <ul>
                        <li><RiSlideshowLine /> Slides</li>
                        <li><RiArticleLine /> Papers</li>
                        <li><RiBook2Line /> eBooks</li>
                    </ul>
                    <p> <MdGTranslate fontSize={"2rem"}/> After creating your content, we will translate it for you in several languages.</p>
                </div>
            </div>

            <div className={styles.remote}>
                <div className={styles.description}>
                    <h2>Control your remote presentations</h2>
                    <p>You can control what your viewers are watching, giving them the freedom to choose the language of the presentation.</p>
                </div>
                <img className={styles.avatar} src="/images/remote.svg" alt="Control your remote presentation avatar"/>
            </div>

            <div className={styles.feedback}>
                <img className={styles.avatar} src="/images/chat.svg" alt="Group Chat Avatar"/>
                <div className={styles.description}>
                    <h2>Receive feedback from your viewers or readers.</h2>
                    <p>You can chat with your viewers during the presentation.</p>
                    <p>Or, receive messages in your message box.</p>
                </div>
            </div>

        </article>
    )
}