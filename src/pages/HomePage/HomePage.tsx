import {motion} from 'framer-motion'

const HomePage = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.2}}
		>
			<h1>О НАС</h1>
		</motion.div>
	)
}

export default HomePage