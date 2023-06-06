import { useState } from "react"
import SwimLane from "../../Components/Dashboard/SwimLane/SwimLane"
import { useAppSelector } from "../../Store/Hooks/useDispatch"
import styles from "./Dashboard.module.scss"
import CreateSwimLane from "../../Components/Common/Popup/Dashboard/CreateSwimLane/CreateSwimLane"

const Dashboard = () => {
	const { swimLanes } = useAppSelector((state) => state.dashboard)
	const [createSwimLane, setCreateSwimLane] = useState(false)

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
