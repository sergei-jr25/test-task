import data from '@/data/menu.json'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import styles from './List.module.scss'
const List: FC<{ className?: string }> = ({ className }) => {
	return (
		<>
			<ul className={cn(styles.list, className)}>
				{data?.map(({ name }: { name: string }) => (
					<li className={cn(styles.list__item)} key={name}>
						<Link className={styles.list__link} href='/'>
							{name}
						</Link>
					</li>
				))}
			</ul>
		</>
	)
}
export default List
