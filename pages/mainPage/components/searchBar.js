import * as React from "react"
import { Searchbar, Colors } from "react-native-paper"
import styles from "../../styles/styles"

const SearchBar = () => {
	const [searchQuery, setSearchQuery] = React.useState("")

	const onChangeSearch = (query) => setSearchQuery(query)

	return (
		<Searchbar
			style={[
				{ alignSelf: "center", width: "90%" },
				styles.mb2,
				styles.mt4,
			]}
			theme={{
				colors: {
					text: Colors.white,
				},
			}}
			placeholder="Buscar"
			onChangeText={onChangeSearch}
			value={searchQuery}
		/>
	)
}

export default SearchBar
