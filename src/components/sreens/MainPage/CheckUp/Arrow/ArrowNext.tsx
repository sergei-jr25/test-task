import ArrowsSvg from '@/assets/SvgComponents/ArrowsSvg'
import { FC } from 'react'
import { useSwiper } from 'swiper/react'
import styles from './Arrow.module.scss'

const ArrowNext: FC = () => {
	const swiper = useSwiper()

	return (
		<div className={styles.arrow}>
			<button
				className={`${styles.arrow__button} ${styles.arrow__next}`}
				onClick={() => swiper.slideNext()}
			>
				<ArrowsSvg />
			</button>
		</div>
	)
}
export default ArrowNext
