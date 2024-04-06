import { Container } from "shared"
import styles from './Header.module.scss'
import { NavLink } from "react-router-dom"

const Header = () => {
	return (
		<header>
			<Container className={styles.items}>
				<>
					<NavLink 
						to={"/"}
						className={styles.item}
					>О НАС</NavLink>
					<NavLink 
						to={"partners"}
						className={styles.item}
					>ПАРТНЕРЫ</NavLink>
					<NavLink 
						to={"estate"}
						className={styles.item}
					>КОММЕРЧЕСКАЯ НЕДВИЖИМОСТЬ</NavLink>
					<NavLink 
						to={"career"}
						className={styles.item}
					>КАРЬЕРА</NavLink>
					<NavLink 
						to={"services"}
						className={styles.item}
					>УСЛУГИ</NavLink>
				</>
			</Container>
		</header>
	)
}

export default Header