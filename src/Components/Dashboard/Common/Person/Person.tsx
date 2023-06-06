import { useAppSelector } from "../../../../Store/Hooks/useDispatch"
import styles from "./Person.module.scss"

export interface PersonType {
	name: string
}

const Person = ({ name }: PersonType) => {
	const firstLetter: string = name[0].toUpperCase()
	const color = useAppSelector(
		(state) => state.dashboard.assignees[name]
	)
	return (
		<div
			className={styles["person"]}
			style={{ backgroundColor: color }}
		>
			{firstLetter}
		</div>
	)
}

export default Person
