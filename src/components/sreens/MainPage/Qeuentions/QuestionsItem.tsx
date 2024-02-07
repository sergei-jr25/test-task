import { FC } from 'react'
import styles from './Questions.module.scss'

interface IQuestionData {
	id: number
	question: string
	answer: string | string[]
}

interface IQuestionsItem {
	item: IQuestionData
	handleExpanded: (idx: number) => void
	expandedItems: boolean[]
	index: number
	textBold?: string
}

const QuestionsItem: FC<IQuestionsItem> = ({
	expandedItems,
	handleExpanded,
	item,
	index,
	textBold,
}) => {
	return (
		<div
			key={item.id}
			onClick={() => handleExpanded(index)}
			className={`${styles.questions__item} ${
				expandedItems[index] ? styles.questions__item_open : ''
			}`}
		>
			<div className={styles.questions__body}>
				<div className={styles.questions__subtitle}>{item.question}</div>

				<div
					className={`text ${styles.questions__text} ${
						expandedItems[index] ? styles.questions__text_open : ''
					}`}
				>
					{Array.isArray(item.answer) ? (
						item.answer?.map((text, index) => <p key={index}>{text}</p>)
					) : (
						<p>{item.answer}</p>
					)}
				</div>
			</div>
		</div>
	)
}
export default QuestionsItem
