import Card, { CardType } from "../Card/Card"
import styles from "./SwimLane.module.scss"

export interface SwimLanesType {
	header: string
	cards: CardType[]
	id?: number
}

const SwimLane = ({ header, cards, id }: SwimLanesType) => {
	return (
		<div className={styles["swim-lane"]}>
			<span>{header}</span>
			<div>
				{cards.map((card, key) => {
					return (
						<Card key={key} title={card.title} tags={card.tags} />
					)
				})}
			</div>
			<button>+ Add another card</button>
		</div>
	)
}

export default SwimLane
