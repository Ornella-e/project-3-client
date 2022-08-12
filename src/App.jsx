import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Profile from "./pages/account/Profile"
import Account from "./pages/account/Account"
import Oops from "./pages/Oops"
import PrivateRoute from "./components/ProtectedRoute/PrivateRoute"
import About from "./pages/About"
import MyReservations from "./pages/MyReservations"
import MyFavourites from "./pages/MyFavourites"
import PostMyCouch from "./pages/PostMyCouch"
import Footer from "./components/Footer/Footer"
import DetailsCouch from "./pages/DetailsCouch"
import EditCouch from "./pages/EditCouch"
import EditProfile from "./pages/account/EditProfile"
import ProfileCard from "./components/User/ProfileCard"
import ProfileImage from "./components/User/ProfileImage"
import Map from "./components/Map/Map"

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signin" element={<Signin />} />
				<Route path="/signup" element={<Signup />} />
				<Route element={<PrivateRoute />}>
					<Route path="/account" element={<Account />} />
					<Route path="/profile" element={<Profile/>} />
					<Route path="/:id/editcouch" element={<EditCouch />} />
					<Route path="/editprofile" element={<EditProfile/>} />
					<Route path="/reservations" element={<MyReservations />} />
					<Route path="/favourites" element={<MyFavourites />} />
					<Route path="/my-couch" element={<PostMyCouch />} />
					<Route path="/profileCard" element={<ProfileCard />} />
					<Route path="/profileimage" element={<ProfileImage />} />
					<Route path="/map" element={<Map/>} />
				</Route>
				<Route path="/about" element={<About />} /> 
				<Route path="/:id" element={<DetailsCouch />} /> 
				<Route path="*" element={<Oops />} /> 
			</Routes>
			<Footer/>
		</div>
	)	
}

export default App
