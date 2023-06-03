import Card, { CardType } from "../Card/Card"

export interface SwimLanesType {
	header: string
	cards: CardType[]
	id?: number
}

const SwimLane = ({ header, cards, id }: SwimLanesType) => {
	return (
		<div>
			<div>{header}</div>
			<div>
				{cards.map((card, key) => {
					return <Card key={key} title={card.title} />
				})}
			</div>
			<button>+ Add another card</button>
		</div>
	)
}

export default SwimLane
