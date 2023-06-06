import styles from "./AppText.module.scss"

interface TextType {
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
	name: string
	value: string
}

const Text = ({ onChange, name, value }: TextType) => {
	return (
		<input
			className={styles["app-text"]}
			type="text"
			name={name}
			onChange={(e) => onChange(e)}
			value={value}
		/>
	)
}

export default Text
