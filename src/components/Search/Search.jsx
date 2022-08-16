import React from "react"

const Search = ({ searchedString, setSearchedString }) => {
	return (
		<input
			type="text"
			placeholder="Seach information here..."
			value={searchedString}
			onChange={(e) => setSearchedString(e.target.value)}
		/>
	)
}

export default Search