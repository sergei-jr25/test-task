import cn from 'clsx'
import { FC } from 'react'
import styles from './Button.module.scss'
import { IButton } from './button.interace'

const Button: FC<IButton> = ({
	children,
	secondary = false,
	className,
	...rest
}) => {
	return (
		<button
			{...rest}
			className={cn(
				styles.button,
				{
					[styles.button_secondary]: secondary,
				},
				className
			)}
			// className={`${styles.button} ${secondary ? styles.button_secondary : '' } ` }
		>
			{children}
		</button>
	)
}
export default Button
