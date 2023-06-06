import { useState } from "react"
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
import {
	createAssignee,
	createCard,
	createTag,
} from "../../../../../Store/Reducers/dashboard"
import { COLORS } from "../../../../Constants/COLORS"
import Person, {
	PersonType,
} from "../../../../Dashboard/Common/Person/Person"
import { CardType } from "../../../../Dashboard/Card/Card"

interface CreateCardType {
	close: () => void
	id: number
}

interface GenericObject {
	[label: string]: boolean
}

interface ExistingTagsType {
	selectedTags: GenericObject
	setSelectedTags: (label: string) => void
}

interface ExistingPeopleType {
	selectedPeople: GenericObject
	setSelectedPeople: (name: string) => void
}

interface FormStateType {
	cardTitle: string
	newTag: string
	tags: GenericObject
	newPerson: string
	assignees: GenericObject
}

const CreateCard = ({ close, id }: CreateCardType) => {
	const dispatch = useAppDispatch()
	const [formState, setFormState] = useState<FormStateType>({
		cardTitle: "",
		newTag: "",
		tags: {},
		newPerson: "",
		assignees: {},
	})

	const updateFormState = (e: React.ChangeEvent<HTMLInputElement>) =>
		setFormState({ ...formState, [e.target.name]: e.target.value })

	const createNewTag = () => {
		const { newTag } = formState

		if (newTag) {
			//TODO allow for color picker instead of randomly assigning one
			const color = COLORS[Math.floor(Math.random() * COLORS.length)]
			dispatch(createTag({ label: newTag, color: color }))
			setFormState((oldState) => {
				let { tags } = oldState
				tags = { ...tags, [newTag]: true }
				oldState.newTag = ""
				return { ...oldState, tags }
			})
		}
	}

	const setSelectedTags = (label: string) => {
		setFormState((oldState) => {
			const { tags } = oldState
			tags[label] = !tags[label]
			return { ...oldState, tags }
		})
	}

	const createNewPerson = () => {
		const { newPerson } = formState
		if (newPerson) {
			const color = COLORS[Math.floor(Math.random() * COLORS.length)]
			dispatch(createAssignee({ name: newPerson, color: color }))

			setFormState((oldState) => {
				let { assignees } = oldState
				assignees = { ...assignees, [newPerson]: true }
				oldState.newPerson = ""
				return { ...oldState, assignees }
			})
		}
	}

	const setSelectedPeople = (name: string) => {
		setFormState((oldState) => {
			const { assignees } = oldState
			assignees[name] = !assignees[name]
			oldState.newPerson = ""
			return { ...oldState, assignees }
		})
	}

	const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const { cardTitle, assignees, tags } = formState

		const cardAssignees: PersonType[] = Object.keys(assignees).map(
			(person) => {
				return { name: person }
			}
		)

		const cardTags: TagType[] = Object.keys(tags).map((tag) => {
			return { label: tag }
		})
		if (cardTitle) {
			const card: CardType = {
				title: cardTitle,
				tags: cardTags,
				assignees: cardAssignees,
			}

			dispatch(createCard({ card: card, laneId: id }))
			close()
		}
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
				<AppLabel label="Card Title" />
				<div className={styles["create-card--input-group__title"]}>
					<AppText
						value={formState.cardTitle}
						name="cardTitle"
						onChange={updateFormState}
					/>
				</div>
				<AppLabel label="Select Card Tags" />
				<ExistingTags
					selectedTags={formState.tags}
					setSelectedTags={setSelectedTags}
				/>
				<div className={styles["create-card--input-group"]}>
					<AppText
						value={formState.newTag}
						name="newTag"
						onChange={updateFormState}
					/>
					<AppButton
						label="Create New Tag"
						click={() => createNewTag()}
						color="gray"
						size="sm"
					/>
				</div>
				<AppLabel label="Select Assignees" />
				<ExistingPeople
					selectedPeople={formState.assignees}
					setSelectedPeople={setSelectedPeople}
				/>
				<div className={styles["create-card--input-group"]}>
					<AppText
						value={formState.newPerson}
						name="newPerson"
						onChange={updateFormState}
					/>
					<AppButton
						label="Create New Assignee"
						click={() => createNewPerson()}
						color="gray"
						size="sm"
					/>
				</div>
				<div className={styles["create-card--bottom-section"]}>
					<AppButton type="submit" label="Create Card" />
				</div>
			</form>
		</Popup>
	)
}

const ExistingTags = ({
	selectedTags,
	setSelectedTags,
}: ExistingTagsType) => {
	const existingTags = useAppSelector((state) => state.dashboard.tags)
	const tagNames = Object.keys(existingTags)

	return (
		<div className={styles["existing-tags"]}>
			{tagNames.map((tag, key) => {
				return (
					<button
						type="button"
						onClick={() => setSelectedTags(tag)}
						key={key}
					>
						<Tag label={tag} selected={selectedTags[tag]} />
					</button>
				)
			})}
		</div>
	)
}

const ExistingPeople = ({
	selectedPeople,
	setSelectedPeople,
}: ExistingPeopleType) => {
	const existingPeople = useAppSelector(
		(state) => state.dashboard.assignees
	)
	const people = Object.keys(existingPeople)

	return (
		<div className={styles["existing-people"]}>
			{people.map((person, key) => {
				return (
					<button
						key={key}
						onClick={() => setSelectedPeople(person)}
						className={styles["existing-people--button"]}
						type="button"
					>
						<Person name={person} />
						{selectedPeople[person] && (
							<span className={styles["existing-people--selected"]}>
								x
							</span>
						)}
					</button>
				)
			})}
		</div>
	)
}

export default CreateCard
