'use client'

import Popup from '@/components/ui/popup/Popup'
import checkUpData from '@/data/checkUp.json'
import { FC, useState } from 'react'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss/pagination'
import ArrowNext from './Arrow/ArrowNext'
import ArrowPrev from './Arrow/ArrowPrev'
import styles from './CheckUp.module.scss'
import CheckUpItem, { ICheckUpData } from './CheckUpItem'

const CheckUp: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [totalPages, setTotalPages] = useState(checkUpData.length)

	const togglePopup = () => {
		setIsOpen(!isOpen)
	}
	return (
		<section className={styles.check}>
			<div className={`container ${styles.check__container}`}>
				<Swiper
					onSlideChange={swiper => setCurrentPage(swiper.activeIndex + 1)}
					modules={[Navigation, Pagination]}
					spaceBetween={16}
					navigation={true}
					pagination={{
						el: '.swiper-pagination',
						type: 'fraction',
						clickable: true,
						renderFraction: function (index, className) {
							return `<span class="${className}">${index + 1}</span>`
						},
					}}
					className='mySwiper'
				>
					{checkUpData.map((item: ICheckUpData, idx) => (
						<SwiperSlide key={idx}>
							<CheckUpItem togglePopup={togglePopup} item={item} />
						</SwiperSlide>
					))}

					<div className={styles.control}>
						<ArrowPrev />
						<div className={styles.control__pagination}>
							<div className={styles.check__control}>
								<strong>{currentPage}</strong>/{totalPages}
							</div>
						</div>

						<ArrowNext />
					</div>
				</Swiper>
				<Popup isOpen={isOpen} togglePopup={togglePopup} />
			</div>
		</section>
	)
}
export default CheckUp
