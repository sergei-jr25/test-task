import { useEffect, useRef, useState } from 'react'

export const useOustide = (initialIsVisible: boolean) => {
	const [isShow, setIsShow] = useState(initialIsVisible)

	const ref = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				setIsShow(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => document.removeEventListener('click', handleClickOutside)
	}, [isShow])

	return { isShow, setIsShow, ref }
}
