import { useState } from "react"
import AppLabel from "../../../AppLabel/AppLabel"
import AppText from "../../../Input/AppText/AppText"
import Popup from "../../Popup"
import styles from "./CreateSwimLane.module.scss"
import AppButton from "../../../Button/AppButton"
import { useDispatch } from "react-redux"
import { createSwimLane } from "../../../../../Store/Reducers/dashboard"
interface CreateSwimLaneType {
	close: () => void
}

interface FormStateType {
	swimLaneHeader: string
}

const CreateSwimLane = ({ close }: CreateSwimLaneType) => {
	const dispatch = useDispatch()

	const [formState, setFormState] = useState<FormStateType>({
		swimLaneHeader: "",
	})

	const updateFormState = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const { swimLaneHeader } = formState

		if (swimLaneHeader) {
			dispatch(createSwimLane({ header: swimLaneHeader, cards: [] }))
			close()
		}
	}

	return (
		<Popup close={close}>
			<form
				className={styles["create-lane"]}
				onSubmit={(e) => formSubmit(e)}
			>
				<span className={styles["create-lane--header"]}>
					Create Swim Lane
				</span>
				<AppLabel label="Swim Lane Title" />
				<AppText
					value={formState.swimLaneHeader}
					onChange={updateFormState}
					name="swimLaneHeader"
				/>
				<div className={styles["create-lane--bottom-section"]}>
					<AppButton label="Create Swim Lane" type="submit" />
				</div>
			</form>
		</Popup>
	)
}

export default CreateSwimLane
