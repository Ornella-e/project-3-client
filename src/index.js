import React from "react"
import {createRoot} from "react-dom/client"
import "./styles/reset.css"
import "./styles/global.css"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom"
import UserWrapper from "./context/auth/UserWrapper"
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<Router>
			<UserWrapper>
				<App />
			</UserWrapper>
		</Router>
	</React.StrictMode>
)
reportWebVitals();
