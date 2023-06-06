import styles from "./AppButton.module.scss"

interface AppButtonType {
	label: string
	click?: () => void
	color?: "blue" | "red"
	type?: "submit" | "button"
}

const AppButton = ({
	label,
	click,
	color = "blue",
	type = "button",
}: AppButtonType) => {
	const btnColor = `app-button--${color}`

	return (
		<button
			className={`${styles["app-button"]} ${styles[btnColor]}`}
			onClick={click}
			type={type}
		>
			{label}
		</button>
	)
}

export default AppButton
