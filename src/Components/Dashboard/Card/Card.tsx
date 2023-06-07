import styles from "./Card.module.scss"
import Person, { PersonType } from "../Common/Person/Person"
import Tag, { TagType } from "../Common/Tag/Tag"

export interface CardType {
	title: string
	tags?: TagType[]
	assignees?: PersonType[]
}

interface CardComponentType extends CardType {
	laneId: number
	deleteCard: (swimLane: number, cardId: number) => void
}

const Card = ({ title, tags, assignees, deleteCard }: CardComponentType) => {

	return (
		<div className={styles["card"]}>
			<div className={styles["card--tags"]}>
				{tags?.map((tag, key) => (
					<Tag label={tag.label} key={key} />
				))}
			</div>
			<span>{title}</span>
			<div className={styles["card--bottom-section"]}>
				{assignees?.map((person, key) => {
					return <Person name={person.name} key={key} />
				})}
			</div>
		</div>
	)
}

export default Card
