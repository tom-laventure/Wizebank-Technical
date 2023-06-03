import { Provider } from 'react-redux'
import StoreContext from './Reducers';

interface storeProviderTypes {
	children: JSX.Element
}

const StoreProvider = ({ children }: storeProviderTypes) => {

	return (
		<Provider store={StoreContext}>
			{children}
		</Provider>
	)
}


export default StoreProvider