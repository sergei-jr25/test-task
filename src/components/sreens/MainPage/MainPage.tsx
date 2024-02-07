import { FC } from 'react'
import CheckUp from './CheckUp/CheckUp'
import Main from './Main/Main'
import Questions from './Qeuentions/Questions'

const MainPage: FC = () => {
	return (
		<div>
			<Main />
			<Questions />
			<CheckUp />
		</div>
	)
}
export default MainPage
