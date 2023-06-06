import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SwimLanesType } from '../../Components/Dashboard/SwimLane/SwimLane'
import { COLORS } from '../../Components/Constants/COLORS'
import { CardType } from '../../Components/Dashboard/Card/Card'


export interface TagColorTypes {
	[key: string]: typeof COLORS[number]
}

export interface AssigneesType {
	[key: string]: typeof COLORS[number]
}

export interface DashboardType {
	swimLanes: SwimLanesType[]
	tags: TagColorTypes,
	assignees: AssigneesType
}

interface CreateTagType {
	label: string,
	color: string
}


interface CreateAssigneeType {
	name: string,
	color: string
}

interface CreateCardType {
	card: CardType,
	laneId: number
}


const initialState: DashboardType = {
	swimLanes: [
		{
			header: 'Teams',
			cards: [
				{
					title: 'How to use this board',
					tags: [{ label: 'Support' }],
					assignees: [{ name: 'frank' }]
				},
				{
					title: 'Product'
				},
				{
					title: 'Marketing',
				},
				{
					title: 'Sales',
					tags: [{ label: 'Support' }]
				},
			],
			id: 0
		}
	],
	tags: {
		'Support': 'red'
	},
	assignees: {
		'frank': 'blue'
	}
}

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		createSwimLane: (state, action: PayloadAction<SwimLanesType>) => {
			state.swimLanes = [...state.swimLanes, action.payload];
		},
		createTag: (state, action: PayloadAction<CreateTagType>) => {
			const { label, color } = action.payload
			state.tags = { ...state.tags, [label]: color }
		},
		createAssignee: (state, action: PayloadAction<CreateAssigneeType>) => {
			const { name, color } = action.payload
			state.assignees = { ...state.assignees, [name]: color }
		},
		createCard: (state, action: PayloadAction<CreateCardType>) => {
			const { card, laneId } = action.payload
			state.swimLanes[laneId].cards = [...state.swimLanes[laneId].cards, card]
		},
	}
})

export const { createSwimLane, createTag, createAssignee, createCard } = dashboardSlice.actions
export { initialState as dashboardState }
export default dashboardSlice.reducer