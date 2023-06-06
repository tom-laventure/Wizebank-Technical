import { useRef, useState } from "react"
import Popup from "../../Popup"
import AppText from "../../../Input/AppText/AppText"
import styles from "./CreateCard.module.scss"
import AppButton from "../../../Button/AppButton"
import AppLabel from "../../../AppLabel/AppLabel"
import {
	useAppDispatch,
	useAppSelector,
} from "../../../../../Store/Hooks/useDispatch"
import Tag, { TagType } from "../../../../Dashboard/Common/Tag/Tag"
import { createTag } from "../../../../../Store/Reducers/dashboard"
import { COLORS } from "../../../../Constants/COLORS"
import { PersonType } from "../../../../Dashboard/Common/Person/Person"

interface CreateCardType {
	close: () => void
}

interface SelectedTags {
	[label: string]: boolean
}

interface FormStateType {
	cardTitle: string
	newTag: string
	tags: TagType[]
	newPerson: string
	assignees: PersonType[]
}

const CreateCard = ({ close }: CreateCardType) => {
	const dispatch = useAppDispatch()
	const [formState, setFormState] = useState<FormStateType>({
		cardTitle: "",
		newTag: "",
		tags: [],
		newPerson: "",
		assignees: [],
	})

	const updateFormState = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	const createNewTag = () => {
		const { newTag } = formState

		if (newTag) {
			//TODO allow for color pickerm instead of randomly assigning one
			const color = COLORS[Math.floor(Math.random() * COLORS.length)]
			dispatch(createTag({ label: newTag, color: color }))
			setFormState((oldState) => {
				const { tags } = oldState
				tags.push({ label: newTag })
				oldState.newTag = ""
				return { ...oldState, tags }
			})
		}
	}

	const createNewPerson = () => {
		// const { newTag } = formState
		// if (newTag) dispatch(createTag({ label: newTag, color: "blue" }))
	}

	const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		console.log("here")
	}

	return (
		<Popup close={close}>
			<form
				className={styles["create-card"]}
				onClick={(e) => e.stopPropagation()}
				onSubmit={(e) => formSubmit(e)}
			>
				<span className={styles["create-card--header"]}>
					Create Card
				</span>
				<label></label>
				<AppLabel label="Card Title" />
				<AppText
					value={formState.cardTitle}
					name="cardTitle"
					onChange={updateFormState}
				/>
				<AppLabel label="Select Card Tags" />
				<ExistingTags />
				<div>
					<AppText
						value={formState.newTag}
						name="newTag"
						onChange={updateFormState}
					/>
					<AppButton
						label="Create New Tag"
						click={() => createNewTag()}
					/>
				</div>
				<AppLabel label="Select Assignees" />
				<div>
					<AppText
						value={formState.newPerson}
						name="newPerson"
						onChange={updateFormState}
					/>
					<AppButton
						label="Create New Assignee"
						click={() => createNewPerson()}
					/>
				</div>
				<div className={styles["create-card--bottom-section"]}>
					<AppButton type="submit" label="Create Card" />
				</div>
			</form>
		</Popup>
	)
}

const ExistingTags = () => {
	const existingTags = useAppSelector((state) => state.dashboard.tags)
	const tagNames = Object.keys(existingTags)
	const [selectedTags, setSelectedTags] = useState<SelectedTags>({})

	const updateSelectedTags = (tagName: string) => {
		const tagState = selectedTags[tagName]
		setSelectedTags({ ...selectedTags, [tagName]: tagState })
	}

	return (
		<div className={styles["existing-cards"]}>
			{tagNames.map((tag, key) => {
				return (
					<Tag
						label={tag}
						key={key}
						selectable
						tagSelected={() => updateSelectedTags(tag)}
					/>
				)
			})}
		</div>
	)
}

export default CreateCard
