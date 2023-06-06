import styles from "./Popup.module.scss"

interface PopupType {
	close: () => void
	children: JSX.Element
}

const Popup = ({ close, children }: PopupType) => {
	return (
		<div className={styles["popup--wrapper"]}>
			<div
				className={styles["popup"]}
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	)
}

export default Popup
