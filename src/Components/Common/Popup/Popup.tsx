import styles from "./Popup.module.scss"

interface PopupType {
	close: () => void
	children: JSX.Element
}

const Popup = ({ close, children }: PopupType) => {
	return (
		<div className={styles["popup--container"]} onClick={close}>
			<div className={styles["popup"]}>{children}</div>
		</div>
	)
}

export default Popup
