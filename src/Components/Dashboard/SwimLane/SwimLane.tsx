import Card, { CardType } from "../Card/Card"
import styles from "./SwimLane.module.scss"
import CreateCard from "../../Common/Popup/Dashboard/CreateCard/CreateCard"
import { useState } from "react"
import {
	DuplicateCardType,
	UpdateCardType,
	UpdateLaneType,
} from "../../../Store/Reducers/dashboard"
import IconBxsLeftArrow from "../../../Assets/Arrows/Left"
import IconBxsRightArrow from "../../../Assets/Arrows/Right"

//basic swim lane object that will be stored in the state
export interface SwimLanesType {
	header: string
	cards: CardType[]
}

interface SwimLaneComponentType extends SwimLanesType {
	id: number
	deleteSwimLane: (id: number) => void
	deleteCard: (laneId: number, cardId: number) => void
	moveSwimLane: ({ move, index }: UpdateLaneType) => void
	moveCard: ({ move, laneIndex, cardIndex }: UpdateCardType) => void
	copyCard: ({ laneIndex, cardIndex }: DuplicateCardType) => void
}

const SwimLane = ({
	header,
	cards,
	id,
	deleteSwimLane,
	deleteCard,
	moveCard,
	moveSwimLane,
	copyCard,
}: SwimLaneComponentType) => {
	const [createCard, setCreateCard] = useState(false)

	return (
		<div className={styles["swim-lane"]}>
			<div className={styles["swim-lane--top-section"]}>
				<span className={styles["swim-lane--header"]}>{header}</span>
				<button
					onClick={() => moveSwimLane({ move: "l", index: id })}
				>
					<IconBxsLeftArrow />
				</button>
				<button
					onClick={() => moveSwimLane({ move: "r", index: id })}
				>
					<IconBxsRightArrow />
				</button>
				<button onClick={() => deleteSwimLane(id)}>delete</button>
			</div>
			<div>
				{cards.map((card, key) => {
					return (
						<Card
							key={key}
							cardId={key}
							laneId={id}
							{...card}
							deleteCard={() => deleteCard(id, key)}
							moveCard={moveCard}
							copyCard={() =>
								copyCard({ laneIndex: id, cardIndex: key })
							}
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
				<CreateCard close={() => setCreateCard(false)} id={id} />
			)}
		</div>
	)
}

export default SwimLane
