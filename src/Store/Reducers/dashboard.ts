import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SwimLanesType } from '../../Components/Dashboard/SwimLane/SwimLane'
import { COLORS } from '../../Components/Constants/COLORS'

// TODO: update string to const set of Enum values, eg: 'red' | 'blue'...
interface TagColorTypes {
	[key: string]: typeof COLORS[number]
}

export interface DashboardType {
	swimLanes: SwimLanesType[]
	tags: TagColorTypes
}

interface CreateTagType {
	label: string,
	color: string
}

const initialState: DashboardType = {
	swimLanes: [
		{
			header: 'teams',
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
	}
}

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		addSwimLane: (state, action: PayloadAction<SwimLanesType>) => {
			state.swimLanes = [...state.swimLanes, action.payload];
		},
		createTag: (state, action: PayloadAction<CreateTagType>) => {
			const { label, color } = action.payload
			state.tags = { ...state.tags, [label]: color }
		}
	}
})

export const { addSwimLane, createTag } = dashboardSlice.actions
export { initialState as dashboardState }
export default dashboardSlice.reducer