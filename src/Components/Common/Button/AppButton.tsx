import styles from "./AppButton.module.scss"

interface AppButtonType {
	label: string
	click: () => void
	color?: "blue" | "red"
}

const AppButton = ({
	label,
	click,
	color = "blue",
}: AppButtonType) => {
	const btnColor = `app-button--${color}`

	return (
		<button
			className={`${styles["app-button"]} ${styles[btnColor]}`}
			onClick={click}
		>
			{label}
		</button>
	)
}

export default AppButton
