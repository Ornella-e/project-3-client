import React from "react"

const Search = ({ searchedString, setSearchedString }) => {
	return (
        <>
		<input
			type="text"
			placeholder="Seach information here..."
			value={searchedString}
			onChange={(e) => setSearchedString(e.target.value)}
		/>
        <button className="button-navbar">Search</button>
        </>
	)
}

export default Search