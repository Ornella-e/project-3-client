import { useState, useEffect, useCallback } from "react"
import UserContext from "./UserContext"
import service from "../../services/apiHandler"

const UserWrapper = ({ children }) => {
	const [auth, setAuth] = useState({
		currentUser: null,
		isLoading: true,
		isLoggedIn: false,
	})

	const authenticateUser = useCallback(async () => {
		const storedToken = localStorage.getItem("authToken")
		if (storedToken) {
			try {
				const user = await service.isLoggedIn()
				// Just a fancy console.log 😁
				console.log(
					`%c${user.email} is logged in`,
					"display: inline-block ; border: 3px solid red ; border-radius: 7px ; " +
						"padding: 10px ; margin: 20px ;"
				)
				setAuth({ currentUser: user, isLoading: false, isLoggedIn: true })
			} catch (error) {
				setAuth({ currentUser: null, isLoading: false, isLoggedIn: false })
			}
		} else {
			setAuth({ currentUser: null, isLoading: false, isLoggedIn: false })
		}
	})

	useEffect(() => {
		authenticateUser()
	}, [])

	// the useCallback hook allow us to save (memoize) those functions so that they don't need to be created everytime we rerender
	const removeUser = useCallback(() => {
		removeToken()
		authenticateUser()
	})

	const removeToken = useCallback(() => {
		localStorage.removeItem("authToken")
	})

	const storeToken = useCallback((token) => {
		localStorage.setItem("authToken", token)
	})

	const authValues = {
		currentUser: auth.currentUser,
		isLoading: auth.isLoading,
		isLoggedIn: auth.isLoggedIn,
		removeUser,
		storeToken,
		authenticateUser,
	}

	return (
		<UserContext.Provider value={authValues}>{children}</UserContext.Provider>
	)
}

export default UserWrapper
