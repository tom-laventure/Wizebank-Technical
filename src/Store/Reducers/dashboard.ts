import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SwimLanesType } from '../../Components/Dashboard/SwimLane/SwimLane'

export interface DashboardType {
	swimLanes: SwimLanesType[]
}

const initialState: DashboardType = {
	swimLanes: [
		{
			header: 'teams',
			cards: [
				{
					title: 'How to use this board'
				},
				{
					title: 'Product'
				},
				{
					title: 'Marketing'
				},
				{
					title: 'Sales'
				},
			]
		}
	]
}

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setSwimLanes: (state, action: PayloadAction<DashboardType>) => {
			state.swimLanes = action.payload.swimLanes
		},
		addSwimLane: (state, action: PayloadAction<SwimLanesType>) => {
			state.swimLanes.push(action.payload)
		}
	}
})

export const { setSwimLanes, addSwimLane } = dashboardSlice.actions
export { initialState as dashboardState }
export default dashboardSlice.reducer