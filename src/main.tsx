import ReactDOM from "react-dom/client"
import "./index.scss"
import Dashboard from "./Container/Dashboard/Dashboard"
import StoreProvider from "./Store/StoreProvider"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<StoreProvider>
		<Dashboard />
	</StoreProvider>
)
