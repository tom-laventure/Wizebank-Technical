import styles from "./AppLabel.module.scss"

interface AppLabelType {
	label: string
}

const AppLabel = ({ label }: AppLabelType) => {
	return <label className={styles["app-label"]}>{label}</label>
}

export default AppLabel
