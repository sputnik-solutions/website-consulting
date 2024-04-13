import {motion} from 'framer-motion'
import styles from './EstatePage.module.scss'
const EstatePage = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.2}}
		>
			<div className={styles.page}>
				<h1>КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</h1>
			</div>
			
		</motion.div>
	)
}

export default EstatePage