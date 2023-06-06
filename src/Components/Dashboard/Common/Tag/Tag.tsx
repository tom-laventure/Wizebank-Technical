import styles from "./Tag.module.scss"

export interface TagType {
	label: string
	color: "red" | "green" | "yellow" | "blue" | "orange"
}

const Tag = ({ label, color }: TagType) => {
	return (
		<div className={styles["tag"]} style={{ backgroundColor: color }}>
			{label}
		</div>
	)
}

export default Tag
