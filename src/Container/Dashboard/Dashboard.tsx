import { useState } from "react"
import SwimLane from "../../Components/Dashboard/SwimLane/SwimLane"
import {
	useAppDispatch,
	useAppSelector,
} from "../../Store/Hooks/useDispatch"
import styles from "./Dashboard.module.scss"
import CreateSwimLane from "../../Components/Common/Popup/Dashboard/CreateSwimLane/CreateSwimLane"
import {
	UpdateCardType,
	UpdateLaneType,
	deleteCard,
	deleteSwimLane,
	updateCard,
	updateLane,
} from "../../Store/Reducers/dashboard"

const Dashboard = () => {
	const dispatch = useAppDispatch()
	const { swimLanes } = useAppSelector((state) => state.dashboard)
	const [createSwimLane, setCreateSwimLane] = useState(false)

	const deleteLaneFun = (id: number) => dispatch(deleteSwimLane(id))
	const deleteCardFun = (laneId: number, cardId: number) =>
		dispatch(deleteCard({ laneId, cardId }))
	const moveCard = ({ move, laneIndex, cardIndex }: UpdateCardType) =>
		dispatch(updateCard({ move, laneIndex, cardIndex }))
	const moveLane = ({ move, index }: UpdateLaneType) =>
		dispatch(updateLane({ move, index }))

	return (
		<div className={styles["dashboard"]}>
			<div className={styles["dashboard--swim-lanes"]}>
				{swimLanes?.map((swimlane, key) => {
					return (
						<SwimLane
							key={key}
							id={key}
							header={swimlane.header}
							cards={swimlane.cards}
							deleteCard={deleteCardFun}
							deleteSwimLane={deleteLaneFun}
							moveCard={moveCard}
							moveSwimLane={moveLane}
						/>
					)
				})}
				<button
					className={styles["dashboard--add-lane"]}
					onClick={() => setCreateSwimLane(true)}
				>
					+ Add another swim lane
				</button>
			</div>
			{createSwimLane && (
				<CreateSwimLane close={() => setCreateSwimLane(false)} />
			)}
		</div>
	)
}

export default Dashboard
