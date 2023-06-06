import { useState } from "react"
import Card, { CardType } from "../Card/Card"
import styles from "./SwimLane.module.scss"
import CreateCard from "../../Common/Popup/Dashboard/CreateCard/CreateCard"

export interface SwimLanesType {
	header: string
	cards: CardType[]
	id?: number
}

const SwimLane = ({ header, cards, id }: SwimLanesType) => {
	const [createCard, setCreateCard] = useState(false)

	return (
		<div className={styles["swim-lane"]}>
			<span className={styles["swim-lane--header"]}>{header}</span>
			<div>
				{cards?.map((card, key) => {
					return <Card key={key} {...card} />
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
