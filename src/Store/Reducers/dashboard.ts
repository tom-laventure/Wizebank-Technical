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
			]
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
		createTag: (state, action: PayloadAction<{
			label: string,
			color: string
		}>) => {
			const { label, color } = action.payload
			state.tags = { ...state.tags, [label]: color }
		},
		createAssignee: (state, action: PayloadAction<{
			name: string,
			color: string
		}>) => {
			const { name, color } = action.payload
			state.assignees = { ...state.assignees, [name]: color }
		},
		createCard: (state, action: PayloadAction<{
			card: CardType,
			laneId: number
		}>) => {
			const { card, laneId } = action.payload
			state.swimLanes[laneId].cards = [...state.swimLanes[laneId].cards, card]
		},
		deleteSwimLane: (state, action: PayloadAction<number>) => {
			const index = action.payload
			state.swimLanes = state.swimLanes.filter((_, i) => i !== index);
		},
		deleteCard: (state, action: PayloadAction<{
			laneId: number,
			cardId: number
		}>) => {
			const { laneId, cardId } = action.payload
			state.swimLanes[laneId].cards = state.swimLanes[laneId].cards.filter((_, i) => i !== cardId);
		},
	}
})

export const { createSwimLane, createTag, createAssignee, createCard, deleteSwimLane, deleteCard } = dashboardSlice.actions
export { initialState as dashboardState }
export default dashboardSlice.reducer