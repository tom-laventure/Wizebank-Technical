import styles from "./Card.module.scss"
import Person, { PersonType } from "../Common/Person/Person"
import Tag, { TagType } from "../Common/Tag/Tag"

export interface CardType {
	title: string
	deleteCard?: (swimLane: number, cardId: number) => void
	tags?: TagType[]
	assignees?: PersonType[]
}

const Card = ({ title, tags, assignees }: CardType) => {

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
