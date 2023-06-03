export interface CardType {
	title: string
	deleteCard?: (swimLane: number, cardId: number) => void
}

const Card = ({ title }: CardType) => {
	return (
		<div>
			<span>{title}</span>
		</div>
	)
}

export default Card
