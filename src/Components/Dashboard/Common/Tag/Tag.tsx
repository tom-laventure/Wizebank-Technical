import { useAppSelector } from "../../../../Store/Hooks/useDispatch"
import styles from "./Tag.module.scss"

export interface TagType {
	label: string,
	selectable?: boolean,
	tagSelected?: () => void
}

const Tag = ({ label }: TagType) => {
	const color = useAppSelector((state) => state.dashboard.tags[label])

	return (
		<div className={styles["tag"]} style={{ backgroundColor: color }}>
			{label}
		</div>
	)
}

export default Tag
