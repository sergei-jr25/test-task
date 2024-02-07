import instagram from '@/assets/image/instagram.png'
import logo from '@/assets/image/logo.png'
import telegram from '@/assets/image/telegram.png'
import whatsapp from '@/assets/image/whatsapp.png'
import List from '@/components/ui/List/List/List'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<div className={`container ${styles.footer__container}`}>
				<div className={styles.footer__left}>
					<div className={styles.footer__logo}>
						<Link href='/'>
							<Image src={logo} alt='logo' />
						</Link>
					</div>
					<List className={styles.footer__list} />
				</div>
				<div className={styles.footer__socials}>
					<Link href='/'>
						<Image src={instagram} alt='instagram' />
					</Link>

					<Link href='/'>
						<Image src={telegram} alt='telegram' />
					</Link>

					<Link href='/'>
						<Image src={whatsapp} alt='whatsapp' />
					</Link>
				</div>
			</div>
		</div>
	)
}
export default Footer
