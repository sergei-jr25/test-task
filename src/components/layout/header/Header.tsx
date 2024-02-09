'use client'

import Location from '@/assets/SvgComponents/Location'
import logo from '@/assets/image/logo-header.png'
import whatsapp2 from '@/assets/image/whatsapp2.png'
import Button from '@/components/ui/Button/Button'
import List from '@/components/ui/List/List/List'
import Popup from '@/components/ui/popup/Popup'
import data from '@/data/header.json'
import useMediaQuery from '@/hooks/useMediaQuery'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
	const [openPopup, setOpenPopup] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)
	const isLargeScreen = useMediaQuery('(min-width: 768px)')

	const togglePopup = () => {
		setOpenPopup(!openPopup)
	}
	const togglenMenu = () => {
		setOpenMenu(!openMenu)
	}

	useEffect(() => {
		if (openMenu) {
			document.body.classList.add('menu-open') // Добавить класс к body
		} else {
			document.body.classList.remove('menu-open') // Удалить класс из body
		}
	}, [openMenu])

	return (
		<header className={styles.header}>
			<div className={styles.header__top}>
				<div className={`container ${styles.header__container}`}>
					<div className={styles.header__menu}>
						<button
							className={`${styles.header__icon_menu} ${
								openMenu ? styles.header__icon_menu_open : ''
							}`}
							onClick={togglenMenu}
						>
							<span></span>
						</button>

						{!isLargeScreen && (
							<nav
								className={`${styles.header__navigation} ${
									openMenu ? styles.header__navigation_open : ''
								} `}
							>
								<List className={styles.header__list} />
								<Button
									onClick={togglePopup}
									secondary={true}
									className={styles.header__button}
								>
									Записаться на прием
								</Button>
							</nav>
						)}
					</div>
					<div className={styles.header__info}>
						<Link className={styles.header__logo} href='/'>
							<Image alt='logo' src={logo} />
						</Link>
						<div className={styles.header__location}>
							<button>
								<Location />
							</button>
							<div className={styles.header__location_text}>
								{data?.location.city}
								<span> {data?.location?.addres}</span>
							</div>
						</div>
					</div>
					<div className={styles.header__actions}>
						<Link className={styles.header__phone} href='to:+78630000000'>
							<Image alt='whatsapp' src={whatsapp2} />
							{data?.phone}
						</Link>

						{isLargeScreen && (
							<Button onClick={togglePopup} className={styles.header__button}>
								Записаться на прием
							</Button>
						)}

						{!isLargeScreen && (
							<div className={styles.header__location_text}>
								{data?.location?.city}
							</div>
						)}
					</div>
				</div>
			</div>
			{isLargeScreen && (
				<div className={styles.header__bottom}>
					<div className={`container ${styles.header__bottom_container}`}>
						<List className={styles.header__list} />
					</div>
				</div>
			)}
			<Popup isOpen={openPopup} togglePopup={togglePopup} />
		</header>
	)
}
export default Header
