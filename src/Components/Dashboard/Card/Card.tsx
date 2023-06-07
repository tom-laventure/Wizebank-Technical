import styles from "./Card.module.scss"
import Person, { PersonType } from "../Common/Person/Person"
import Tag, { TagType } from "../Common/Tag/Tag"

// basic card object that will be stored in the state
export interface CardType {
	title: string
	tags?: TagType[]
	assignees?: PersonType[]
}

interface CardComponentType extends CardType {
	laneId: number
	deleteCard: () => void
}

const Card = ({
	title,
	tags,
	assignees,
	deleteCard,
}: CardComponentType) => {
	return (
		<div className={styles["card"]}>
			<div className={styles["card--tags"]}>
				{tags?.map((tag, key) => (
					<Tag label={tag.label} key={key} />
				))}
			</div>
			<span>{title}</span>
			<div className={styles["card--bottom-section"]}>
				<div className={styles["card--controls"]}>
					<button onClick={deleteCard}>delete</button>
					<button>move</button>
				</div>
				<div className={styles["card--assignees"]}>
					{assignees?.map((person, key) => {
						return <Person name={person.name} key={key} />
					})}
				</div>
			</div>
		</div>
	)
}

export default Card
