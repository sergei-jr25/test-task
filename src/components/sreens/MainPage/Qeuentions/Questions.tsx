'use client'
import quantions from '@/data/quations.json'
import { FC, useState } from 'react'
import styles from './Questions.module.scss'
import QuestionsItem from './QuestionsItem'

const Questions: FC = () => {
	const [expandedItems, setExpandedItems] = useState([
		true,
		false,
		false,
		false,
	])

	const handleExpanded = (index: number) => {
		const newExpandedItems = [...expandedItems]
		newExpandedItems[index] = !newExpandedItems[index]
		setExpandedItems(newExpandedItems)
	}

	return (
		<section className={styles.questions}>
			<div className='container'>
				<h2 className={`title ${styles.questions__title} `}>
					Часто задаваемые вопросы
				</h2>
				<div className={styles.questions__items}>
					{quantions?.map((item, index) => (
						<QuestionsItem
							key={item.id}
							expandedItems={expandedItems}
							handleExpanded={handleExpanded}
							index={index}
							item={item}
						/>
					))}
				</div>

				{/* <div className={styles.questions__items}>
					<div
						onClick={handleExpanded}
						className={`${styles.questions__item} ${
							isExpanded ? styles.questions__item_open : ''
						}`}
					>
						<div className={styles.questions__body}>
							<div className={styles.questions__subtitle}>
								Заголовок часто задаваемого вопроса
							</div>

							<div
								className={`text ${styles.questions__text} ${
									isExpanded ? styles.questions__text_open : ''
								}`}
							>
								<p>
									Blandit et et ac non interdum odio tristique diam vestibulum.
									Velit in quis consequat lacus fringilla amet elementum
									pharetra massa. Morbi euismod nulla cras adipiscing tristique
									aliquet purus adipiscing.
								</p>
							</div>
						</div>
					</div>
					<div
						onClick={handleExpanded2}
						className={`${styles.questions__item} ${
							isExpanded2 ? styles.questions__item_open : ''
						}`}
					>
						<div className={styles.questions__body}>
							<div className={styles.questions__subtitle}>
								Заголовок часто задаваемого вопроса
							</div>

							<div
								className={`text ${styles.questions__text} ${
									isExpanded2 ? styles.questions__text_open : ''
								}`}
							>
								<p>
									Blandit et et ac non. interdum odio tristique diam vestibulum.
									Velit in quis consequat lacus fringilla amet elementum
									pharetra massa. Morbi euismod nulla cras adipiscing tristique
									aliquet purus adipiscing.
								</p>
								<br />
								<p>
									<strong>Blandit et et ac non. </strong> interdum odio
									tristique diam vestibulum. Velit in quis consequat lacus
									fringilla amet elementum pharetra massa. Morbi euismod nulla
									cras adipiscing tristique aliquet purus adipiscing.
								</p>
							</div>
						</div>
					</div>
					<div
						onClick={handleExpanded3}
						className={`${styles.questions__item} ${
							isExpanded3 ? styles.questions__item_open : ''
						}`}
					>
						<div className={styles.questions__body}>
							<div className={styles.questions__subtitle}>
								Заголовок часто задаваемого вопроса
							</div>

							<div
								className={`text ${styles.questions__text} ${
									isExpanded3 ? styles.questions__text_open : ''
								}`}
							>
								<p>
									Blandit et et ac non interdum odio tristique diam vestibulum.
									Velit in quis consequat lacus fringilla amet elementum
									pharetra massa. Morbi euismod nulla cras adipiscing tristique
									aliquet purus adipiscing.
								</p>
							</div>
						</div>
					</div>
					<div
						onClick={handleExpanded4}
						className={`${styles.questions__item} ${
							isExpanded4 ? styles.questions__item_open : ''
						}`}
					>
						<div className={styles.questions__body}>
							<div className={styles.questions__subtitle}>
								Заголовок часто задаваемого вопроса
							</div>

							<div
								className={`text ${styles.questions__text} ${
									isExpanded4 ? styles.questions__text_open : ''
								}`}
							>
								<p>
									Blandit et et ac non interdum odio tristique diam vestibulum.
									Velit in quis consequat lacus fringilla amet elementum
									pharetra massa. Morbi euismod nulla cras adipiscing tristique
									aliquet purus adipiscing.
								</p>
							</div>
						</div>
					</div>
				</div> */}
			</div>
		</section>
	)
}
export default Questions
