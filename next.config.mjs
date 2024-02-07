/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// Укажите паттерны для разрешенных удаленных источников изображений
		remotePatterns: [{ hostname: 'localhost' }], // Указываем объект с свойством "hostname"
	},
}

export default nextConfig
