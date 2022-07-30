import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/Profile"
import Oops from "./pages/Oops"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import About from "./pages/About"
import MyReservations from "./pages/MyReservations"
import MyFavourites from "./pages/MyFavourites"
import PostMyCouch from "./pages/PostMyCouch"
import Footer from "./components/Footer/Footer"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<PrivateRoute />}>
					<Route path="/profile" element={<Profile />} />
					<Route path="/reservations" element={<MyReservations />} />
					<Route path="/favourites" element={<MyFavourites />} />
					<Route path="/my-couch" element={<PostMyCouch />} />
				</Route>
				<Route path="/about" element={<About />} /> 
				<Route path="*" element={<Oops />} /> 
			</Routes>
			<Footer/>
		</div>
	)	
}

export default App
