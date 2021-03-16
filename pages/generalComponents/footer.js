//basic shit
import * as React from "react"
import { IconButton, Surface, Colors } from "react-native-paper"

const BottomNavItemGroup = ({ navigation }) => {
	const BottomNavItem = ({ icon, title, navigation, route, userId }) => (
		<IconButton
			icon={icon}
			onPress={() => navigation.navigate(route, { ...userId })}
			color={Colors.grey300}
		/>
	)
	return (
		<Surface
			style={{ justifyContent: "space-around", flexDirection: "row" }}
		>
			<BottomNavItem icon="a" navigation={navigation} route="test" />
			<BottomNavItem icon="home" navigation={navigation} route="main" />
			<BottomNavItem icon="account" navigation={navigation} route="acc" />
		</Surface>
	)
}

export default BottomNavItemGroup
