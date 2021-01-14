import * as React from "react"
import { View } from "react-native"
import { BottomNavigation, Text } from "react-native-paper"
import Header from "./header"

const MyComponent = (propsMain) => {
	const [index, setIndex] = React.useState(0)
	const [routes] = React.useState([
		{ key: "music", title: "Music", icon: "queue-music" },
		{ key: "albums", title: "Albums", icon: "album" },
		{ key: "recents", title: "Recents", icon: "history" },
	])

	const colors = ["green", "blue", "purple"]

	const ViewCustom = (props) => (
		<View style={{ marginBottom: 15 }}>
			<Header></Header>
			{props.children}
		</View>
	)

	return (
		<BottomNavigation
			navigationState={{ index, routes }}
			onIndexChange={setIndex}
			renderScene={() => (
				<ViewCustom>{propsMain.scenes[index]}</ViewCustom>
			)}
			barStyle={{ backgroundColor: colors[index] }}
		/>
	)
}
export default MyComponent
