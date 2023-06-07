import styles from "./Card.module.scss"
import Person, { PersonType } from "../Common/Person/Person"
import Tag, { TagType } from "../Common/Tag/Tag"
import { UpdateCardType } from "../../../Store/Reducers/dashboard"
import IconBxsLeftArrow from "../../../Assets/Arrows/Left"
import IconBxsUpArrow from "../../../Assets/Arrows/Up"
import IconBxsDownArrow from "../../../Assets/Arrows/Down"
import IconBxsRightArrow from "../../../Assets/Arrows/Right"

// basic card object that will be stored in the state
export interface CardType {
	title: string
	tags?: TagType[]
	assignees?: PersonType[]
}

interface CardComponentType extends CardType {
	laneId: number
	cardId: number
	deleteCard: () => void
	moveCard: ({ move, cardIndex, laneIndex }: UpdateCardType) => void
}

const Card = ({
	title,
	tags,
	assignees,
	deleteCard,
	moveCard,
	cardId,
	laneId,
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
					<button
						onClick={() =>
							moveCard({
								move: "l",
								cardIndex: cardId,
								laneIndex: laneId,
							})
						}
					>
						<IconBxsLeftArrow />
					</button>
					<button
						onClick={() =>
							moveCard({
								move: "r",
								cardIndex: cardId,
								laneIndex: laneId,
							})
						}
					>
						<IconBxsRightArrow />
					</button>
					<button
						onClick={() =>
							moveCard({
								move: "u",
								cardIndex: cardId,
								laneIndex: laneId,
							})
						}
					>
						<IconBxsUpArrow />
					</button>
					<button
						onClick={() =>
							moveCard({
								move: "d",
								cardIndex: cardId,
								laneIndex: laneId,
							})
						}
					>
						<IconBxsDownArrow />
					</button>
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
