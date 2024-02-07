import { forwardRef } from 'react'
import ReactInputMask from 'react-input-mask'
import styles from './Field.module.scss'
import { iField } from './field.interface'

const Field = forwardRef<HTMLInputElement, iField>(
	({ error, placeholder, type = 'text', style, ...rest }, ref) => {
		return (
			<div className={styles.field} style={style}>
				<label className={styles.field__label}>
					{type === 'phone' ? (
						<ReactInputMask
							mask='+7 (999) 999-99-99'
							placeholder={placeholder}
							{...rest}
						/>
					) : (
						<input
							className={styles.field__input}
							type={type}
							placeholder={placeholder}
							ref={ref}
							{...rest}
						/>
					)}
				</label>
				{error && <div className={styles.field__error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
