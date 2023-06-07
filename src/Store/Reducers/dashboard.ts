import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SwimLanesType } from '../../Components/Dashboard/SwimLane/SwimLane'
import { COLORS } from '../../Components/Constants/COLORS'
import { CardType } from '../../Components/Dashboard/Card/Card'
import { MOVEMENT } from '../../Components/Constants/MOVEMENT'


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

export interface UpdateCardType {
	move: 'u' | 'd' | 'l' | 'r',
	cardIndex: number
	laneIndex: number
}

export interface UpdateLaneType {
	move: 'l' | 'r',
	index: number
}

export interface DuplicateCardType {
	cardIndex: number
	laneIndex: number
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
					title: 'Product',
					tags: [{ label: 'Marketing' }]
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
		'Support': 'red',
		'Marketing': 'green'

	},
	assignees: {
		'frank': 'blue',
		'james': 'orange'
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
		updateCard: (state, action: PayloadAction<UpdateCardType>) => {
			const { move, laneIndex, cardIndex } = action.payload
			const x = MOVEMENT[move].x + laneIndex
			const y = MOVEMENT[move].y + cardIndex

			let fromCard;
			let toCard;
			if (x >= state.swimLanes.length ||
				y >= state.swimLanes[laneIndex].cards.length ||
				x < 0 || y < 0) return;
			switch (move) {
				case 'u':
				case 'd':
					fromCard = state.swimLanes[laneIndex].cards[cardIndex];
					toCard = state.swimLanes[x].cards[y];
					state.swimLanes[laneIndex].cards[cardIndex] = toCard;
					state.swimLanes[x].cards[y] = fromCard;
					break;
				case 'l':
				case 'r':
					fromCard = state.swimLanes[laneIndex].cards.splice(cardIndex, 1);
					state.swimLanes[x].cards.push(fromCard[0])
					break;
			}
		},
		updateLane: (state, action: PayloadAction<UpdateLaneType>) => {
			const { move, index } = action.payload
			const x = MOVEMENT[move].x + index

			if (x >= state.swimLanes.length ||
				x < 0) return;
			const fromLane = state.swimLanes[index];
			const toLane = state.swimLanes[x];
			state.swimLanes[index] = toLane;
			state.swimLanes[x] = fromLane;
		},
		duplicateCard: (state, action: PayloadAction<DuplicateCardType>) => {
			const { laneIndex, cardIndex } = action.payload

			const copyCard = state.swimLanes[laneIndex].cards[cardIndex]
			state.swimLanes[laneIndex].cards = [...state.swimLanes[laneIndex].cards, copyCard]
		},
	}
})

export const {
	createSwimLane,
	createTag,
	createAssignee,
	createCard,
	deleteSwimLane,
	deleteCard,
	updateLane,
	updateCard,
	duplicateCard
} = dashboardSlice.actions
export { initialState as dashboardState }
export default dashboardSlice.reducer