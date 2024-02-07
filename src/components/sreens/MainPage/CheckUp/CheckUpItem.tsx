import img from '@/assets/image/doctor-working.png'
import Button from '@/components/ui/Button/Button'
import Image from 'next/image'
import { FC } from 'react'
import styles from './CheckUp.module.scss'

export interface ICheckUpData {
	title: string
	subtitle: string
	items: string[]
	price: string
	oldPrice: string
	image: string
}

const CheckUpItem: FC<{ item: ICheckUpData; togglePopup: () => void }> = ({
	item,
	togglePopup,
}) => {
	return (
		<div className={styles.check__block}>
			<div className={styles.check__body}>
				<div className={styles.check__content}>
					<h2 className={styles.check__title}>
						{item.title} <br />
						<span>{item.subtitle}</span>
					</h2>
					<ul className={styles.check__list}>
						{item?.items?.map(el => (
							<li className={styles.check__item} key={el}>
								{el}
							</li>
						))}
					</ul>
					<div className={styles.check__prices}>
						<div className={styles.check__totalPrice}> {item.price}</div>
						<div className={styles.check__oldPrice}>{item.oldPrice}</div>
					</div>

					<div className={styles.check__buttons}>
						<Button onClick={togglePopup}>Записаться</Button>
						<Button
							onClick={togglePopup}
							className={styles.check__button_outline}
						>
							Подробнее
						</Button>
					</div>
				</div>
			</div>
			<div className={styles.check__media}>
				<Image src={img} alt={item.title} />
			</div>
		</div>
	)
}
export default CheckUpItem
