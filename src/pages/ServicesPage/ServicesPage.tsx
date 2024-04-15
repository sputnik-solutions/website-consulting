
import {motion} from 'framer-motion'
import styles from './ServicesPage.module.scss'
import { Container } from 'shared'

import sputnik from 'assets/icons/home_page/sputnik.svg'
import benefit_img from 'assets/img/services/benefit_img.png'
import arrow from 'assets/img/services/arrow.svg'
const ServicesPage = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.2}}
		>
			<div className={styles.page}>
				<div style={{position: 'relative'}}>
					<Container className={styles.cap}>
						<>
							<p className={styles.cap__title}>РЕСТОРАННЫЙ БИЗНЕС</p>
							<div className={styles.cap__descr}>
								<p>Подробное описание услуги, преимущества, плюсы в работе. Выгода для клиента.</p>
								<p>Hendrerit gravida rutrum quisque non tellus. Rhoncus mattis rhoncus urna neque viverra. Elementum facilisis leo vel fringilla est. In fermentum et sollicitudin ac orci. Dui faucibus in ornare quam viverra. Portti-tor lacus luctus accumsan tortor posuere. Turpis nunc eget lorem dolor sed.</p>
							</div>
						</>
					</Container>
				</div>

				<div style={{position: 'relative'}}>
					<Container className={styles.descr}>
						<>	
							<div className={styles.descr__block}>
								<p className={styles.descr__title}>Описание </p>
								<p className={styles.descr__subtitle}>Краткая информация о статистике и подобном</p>
								<p className={styles.descr__text}>Подробная информация. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque. Vitae sapien pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Adipiscing diam donec adipiscing tristique. Hendrerit gravida rutrum quisque non tellus. </p>
							</div>
							<div className={styles.descr__img}>Место для фото</div>
							<div className={styles.descr__img}>Место для фото</div>
							<div className={styles.descr__block}>
								<p className={styles.descr__title}>Описание </p>
								<p className={styles.descr__subtitle}>Краткая информация о статистике и подобном</p>
								<p className={styles.descr__text}>Подробная информация. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl rhoncus mattis rhoncus urna neque. Vitae sapien pellentesque habitant morbi tristique senectus et. Dolor sit amet consectetur adipiscing elit ut aliquam purus sit. Adipiscing diam donec adipiscing tristique. Hendrerit gravida rutrum quisque non tellus. </p>
							</div>
							
						</>
					</Container>
				</div>

				<div style={{position: 'relative'}} className={styles.numbers}>
					<div className={styles.numbers__wrapper}>
						<div className={styles.numbers__title}>
							<p>Цифры</p>
							<img src={sputnik} alt="" />
						</div>
						<p className={styles.numbers__subtitle}>Информация о разделе. Lorem  <br /> ipsum dolor sit amet, consectetur ad- <br /> ipiscing elit, sed do eiusmod.</p>
					</div>
					<Container className={styles.numbers__examples}>
						<>
						<div className={styles.numbers__line}></div>

						<div className={styles.numbers__example}>
							<p className={styles.numbers__example__title}>12.000$</p>
							<p className={styles.numbers__example__descr}>Статистическая информация. Описание цифр. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
						</div>

						<div className={styles.numbers__line}></div>

						<div className={styles.numbers__example}>
							<p className={styles.numbers__example__title}>2.000$</p>
							<p className={styles.numbers__example__descr}>Статистическая информация. Описание цифр. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
						</div>

						<div className={styles.numbers__line}></div>

						<div className={styles.numbers__example}>
							<p className={styles.numbers__example__title}>35%</p>
							<p className={styles.numbers__example__descr}>Статистическая информация. Описание цифр. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
						</div>

						<div className={styles.numbers__line}></div>
						</>
					</Container>

				</div>
				
				<div style={{position: 'relative'}}>
					<Container className={styles.motivation}>
						<>
							<div style={{display: 'flex'}}>
								<p className={styles.motivation__title}>НАЗВАНИЕ РАЗДЕЛА</p>
								<div className={styles.motivation__img}>
									<div className={styles.motivation__img_pink}></div>
								</div>
								<div className={styles.motivation__slogan}>
									Кратная информация о разделе. Слоган. Мотивирующая надпись. <br />
									Дополнительные услуги и плюсы сотрудничества. 
								</div>
							</div>
							<div className={styles.motivation__wrapper}>
								<div className={styles.motivation__benefits}>
									<div className={styles.motivation__benefits__item}>
										<img src={benefit_img} alt="" />
										<p className={styles.motivation__benefits__text}>Преимущество</p>
									</div>
									<div className={styles.motivation__benefits__item}>
										<img src={benefit_img} alt="" />
										<p className={styles.motivation__benefits__text}>Преимущество</p>
									</div>
									<div className={styles.motivation__benefits__item}>
										<img src={benefit_img} alt="" />
										<p className={styles.motivation__benefits__text}>Преимущество</p>
									</div>
									<div className={styles.motivation__benefits__item}>
										<img src={benefit_img} alt="" />
										<p className={styles.motivation__benefits__text}>Преимущество</p>
									</div>
									<p className={styles.motivation__benefits__descr}>
										Краткоеописание.Loremipsumdolorsitamet,consectetuerad- <br /> 
										ipiscingelit,seddiamnonummynibheuismodtinciduntutlaoreet <br />
										doloremagnaaliquameratvolutpat.Utwisienimadminim <br />
										veniam,quisnostrudexercitationullamcorpersuscipitlobortisnisl <br />
										ut aliquip ex ea commodo consequat. <br />
									</p>
									<button className={styles.motivation__benefits__btn}>КНОПКА ДЛЯ ПЕРЕХОДА</button>
								</div>

								<div className={styles.motivation__btn}>
									<p className={styles.motivation__btn__title}>МОТИВИРУЮЩИЙ СЛОГАН</p>
									<p className={styles.motivation__btn__descr}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed 
									diam nonummy nibh euismod tincidunt ut laoreet dolore 
									</p>
									<div className={styles.motivation__btn__circle}>
										<div style={{backgroundColor: 'white', height: '150px', width: '150px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
											<img src={arrow} alt="" />
										</div>
									</div>
								</div>
							</div>
						</>
					</Container>

				</div>

				<div style={{position: 'relative'}}>
					<Container className={styles.last}>

					</Container>
				</div>
			</div>
		</motion.div>
	)
}

export default ServicesPage