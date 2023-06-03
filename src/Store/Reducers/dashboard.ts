import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface DashboardType {
	placeholder: string
}

const initialState = {
	placeholder: ''
}

const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		placeholder: (state, action: PayloadAction<DashboardType>) => {
			state.placeholder = action.payload.placeholder
		}
	}
})

export const { placeholder } = dashboardSlice.actions
export { initialState as dashboardState }
export default dashboardSlice.reducer