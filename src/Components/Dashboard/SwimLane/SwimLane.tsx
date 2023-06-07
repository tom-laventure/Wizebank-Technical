import Card, { CardType } from "../Card/Card"
import styles from "./SwimLane.module.scss"
import CreateCard from "../../Common/Popup/Dashboard/CreateCard/CreateCard"

//basic swim lane object that will be stored in the state
export interface SwimLanesType {
	header: string
	cards: CardType[]
}

interface SwimLaneComponentType extends SwimLanesType {
	id: number
	deleteSwimLane: (id: number) => void
	deleteCard: (laneId: number, cardId: number) => void
	setCreateCard: (state: boolean) => void
	createCard: boolean
}

const SwimLane = ({
	header,
	cards,
	id,
	deleteSwimLane,
	deleteCard,
	setCreateCard,
	createCard,
}: SwimLaneComponentType) => {
	return (
		<div className={styles["swim-lane"]}>
			<div className={styles["swim-lane--top-section"]}>
				<span className={styles["swim-lane--header"]}>{header}</span>
				<button onClick={() => deleteSwimLane(id)}>delete</button>
			</div>
			<div>
				{cards?.map((card, key) => {
					return (
						<Card
							key={key}
							laneId={id}
							{...card}
							deleteCard={deleteCard}
						/>
					)
				})}
			</div>
			<button
				className={styles["swim-lane--create-card"]}
				onClick={() => setCreateCard(true)}
			>
				+ Add another card
			</button>
			{createCard && (
				<CreateCard close={() => setCreateCard(false)} id={id!} />
			)}
		</div>
	)
}

export default SwimLane
