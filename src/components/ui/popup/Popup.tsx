'use client'

import { validateEmail } from '@/utils/validateEmail'
import emailjs from '@emailjs/browser'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button/Button'
import Field from '../Field/Field'
import Loader from '../loader/Loader'
import styles from './Popup.module.scss'
interface IPopup {
	isOpen: boolean
	togglePopup: () => void
}
const Popup: FC<IPopup> = ({ isOpen, togglePopup }) => {
	const [loading, setLoading] = useState(false)
	const {
		handleSubmit,
		formState: { errors },
		register,
		reset,
		resetField,
	} = useForm({ mode: 'onChange' })

	const onSubmit = (data: any) => {
		setLoading(true)

		emailjs
			.send('service_ufi0q5q', 'template_l9klk95', data, 'v3gsfTXl7BX89OAVk')
			.then(response => {
				setLoading(false)
				alert('Отправленно')
				reset()
				resetField('phone')
				togglePopup()

				console.log('SUCCESS!', response.status, response.text)
			})
			.catch(e => {
				console.log(e)
			})
	}
	return (
		<div className={`${styles.popup} ${isOpen ? styles.open : ''}`}>
			<div className={styles.popup__wrap}>
				<div className={styles.popup__content}>
					<button className={styles.popup__close} onClick={togglePopup}>
						&times;
					</button>
					<div className={styles.popup__body}>
						<h2 className={styles.popup__title}>Запишитесь на приём онлайн</h2>
						<p className={styles.popup__text}>
							Администратор свяжется с вами через WhatsApp в течение дня и
							уточнит детали
						</p>
					</div>
					{loading ? (
						<Loader />
					) : (
						<form
							className={styles.popup__form}
							onSubmit={handleSubmit(onSubmit)}
						>
							<Field
								{...register('name', {
									required: 'Ввидите ФИО',
								})}
								error={errors.name}
								type='name'
								placeholder='ФИО'
							/>
							<Field
								{...register('phone')}
								error={errors.phone}
								type='phone'
								placeholder='Номер телефона *'
							/>

							<Field
								{...register('email', {
									required: 'Email is required',
									pattern: {
										message: 'Не корретный email',
										value: validateEmail,
									},
								})}
								error={errors.email}
								type='email'
								placeholder='Введите email'
							/>
							<Button>Записаться</Button>
						</form>
					)}
				</div>
			</div>
		</div>
	)
}

export default Popup
