import SwimLane from "../../Components/Dashboard/SwimLane/SwimLane"
import { useAppSelector } from "../../Store/Hooks/useDispatch"
import styles from "./Dashboard.module.scss"

const Dashboard = () => {
	const { swimLanes } = useAppSelector((state) => state.dashboard)

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
				<button className={styles["dashboard--add-lane"]}>
					+ Add another swim lane
				</button>
			</div>
		</div>
	)
}

export default Dashboard
