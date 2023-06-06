import styles from "./Card.module.scss"
import Tag, { TagType } from "./Tag/Tag"
export interface CardType {
	title: string
	deleteCard?: (swimLane: number, cardId: number) => void
	tags: TagType[]
}

const Card = ({ title, tags }: CardType) => {
	return (
		<div className={styles["card"]}>
			<div className={styles["card--tags"]}>
				{tags.map((tag, key) => (
					<Tag label={tag.label} color={tag.color} key={key} />
				))}
			</div>
			<span>{title}</span>
			<div className={styles["card--bottom-section"]}>
				
			</div>
		</div>
	)
}

export default Card
