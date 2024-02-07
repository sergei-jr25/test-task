import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

const CastomLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	)
}
export default CastomLayout
