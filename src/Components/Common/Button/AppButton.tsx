import styles from "./AppButton.module.scss"

interface AppButtonType {
	label: string
	click?: () => void
	color?: "blue" | "gray"
	type?: "submit" | "button"
	size?: "sm" | "default"
}

const AppButton = ({
	label,
	click,
	color = "blue",
	type = "button",
	size = "default",
}: AppButtonType) => {
	const btnColor = `app-button--${color}`
	const btnSize = `app-button--${size}`

	return (
		<button
			className={`${styles["app-button"]} ${styles[btnColor]} ${styles[btnSize]}`}
			onClick={click}
			type={type}
		>
			{label}
		</button>
	)
}

export default AppButton
