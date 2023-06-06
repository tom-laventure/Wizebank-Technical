import { useState } from "react"
import Card, { CardType } from "../Card/Card"
import styles from "./SwimLane.module.scss"
import CreateCard from "../../Common/Popup/CreateCard/CreateCard"

export interface SwimLanesType {
	header: string
	cards: CardType[]
	id?: number
}

const SwimLane = ({ header, cards, id }: SwimLanesType) => {
	const [createCard, setCreateCard] = useState(true)

	return (
		<div className={styles["swim-lane"]}>
			<span>{header}</span>
			<div>
				{cards.map((card, key) => {
					return <Card key={key} {...card} />
				})}
			</div>
			<button onClick={() => setCreateCard(true)}>
				+ Add another card
			</button>
			{createCard && (
				<CreateCard close={() => setCreateCard(false)} />
			)}
		</div>
	)
}

export default SwimLane
