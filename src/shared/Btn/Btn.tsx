import styles from './Btn.module.scss'

function Btn(props: {
	children: React.ReactNode
	className?: string
}) {
	const {children, className} = props
  return (
	<div className={`${styles.btn} ${className}`}>
	  {children}
	</div>
  )
}

export default Btn
