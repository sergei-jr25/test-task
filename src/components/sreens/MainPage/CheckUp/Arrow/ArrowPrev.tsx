import ArrowsSvg from '@/assets/SvgComponents/ArrowsSvg'
import { FC } from 'react'
import { useSwiper } from 'swiper/react'
import styles from './Arrow.module.scss'

const ArrowPrev: FC = () => {
	const swiper = useSwiper()

	return (
		<div className={styles.arrow}>
			<button
				className={`${styles.arrow__button} ${styles.arrow__prev}`}
				onClick={() => swiper.slidePrev()}
			>
				<ArrowsSvg />
			</button>
		</div>
	)
}
export default ArrowPrev
