import rectangle from '@/assets/image/rectangle.jpg'
import data from '@/data/main.json'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Main.module.scss'

const Main: FC = () => {
	return (
		<div className={styles.main}>
			<div className={`container ${styles.main__container}`}>
				<div className={styles.main__body}>
					<h1 className={`title ${styles.main__title}`}>{data?.title}</h1>
					<p className={`text ${styles.main__text}`}>{data?.text}</p>
				</div>

				<div className={styles.main__media}>
					<Image alt='rectangle' src={rectangle} />
				</div>
			</div>
		</div>
	)
}
export default Main
