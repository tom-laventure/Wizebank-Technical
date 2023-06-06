import { useAppSelector } from "../../../../Store/Hooks/useDispatch"
import styles from "./Tag.module.scss"

export interface TagType {
	label: string
	selected?: boolean
}

const Tag = ({ label, selected }: TagType) => {
	const color = useAppSelector((state) => state.dashboard.tags[label])

	return (
		<div className={styles["tag"]} style={{ backgroundColor: color }}>
			{label}
			{selected && <span className={styles["tag--selected"]}>x</span>}
		</div>
	)
}

export default Tag
