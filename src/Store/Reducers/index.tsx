import dashboardReducder, { dashboardState, DashboardType } from "./dashboard"
import { configureStore } from "@reduxjs/toolkit"

export interface stateType {
	dashboard: DashboardType
}

const reducer = {
	dashboard: dashboardReducder,
}

const preloadedState: stateType = {
	dashboard: dashboardState,
}

const StoreContext = configureStore({ reducer, preloadedState })

export default StoreContext
export type DispatchType = typeof StoreContext.dispatch
export type RootState = ReturnType<typeof StoreContext.getState>
