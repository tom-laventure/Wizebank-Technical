import { useRef } from "react"
import Popup from "../Popup"
import Text from "../../Input/AppText/AppText"
import styles from "./CreateCard.module.scss"
import AppButton from "../../Button/AppButton"

interface CreateCardType {
	close: () => void
}

const CreateCard = ({ close }: CreateCardType) => {
	const labelRef = useRef(null)
	const tagRef = useRef(null)
	const personRef = useRef(null)

	return (
		<Popup close={close}>
			<form
				className={styles["create-card"]}
				onClick={(e) => e.stopPropagation()}
			>
				<span className={styles["create-card--header"]}>
					Create Card
				</span>
				<Text label="Card Title" refValue={labelRef} />
				<Text label="Tags" refValue={tagRef} />
				<Text label="People" refValue={personRef} />
				<div className={styles["create-card--bottom-section"]}>
					<AppButton label="Create Card" click={() => close()} />
				</div>
			</form>
		</Popup>
	)
}

export default CreateCard
