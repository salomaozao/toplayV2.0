import * as React from "react"
import "react-native-gesture-handler"

import { View, Dimensions } from "react-native"
import {
	DefaultTheme,
	Text,
	Provider as PaperProvider,
	Colors,
	Button,
} from "react-native-paper"

// import safeAreaView

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//pages
import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc/index"
import { TouchableOpacity } from "react-native-gesture-handler"
import styles from "./styles/styles"

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.blue900,
		accent: "#f1c40f",
		// background: Colors.blueA100,
		surface: Colors.grey100,
		text: Colors.grey700,
	},
}

const Stack = createStackNavigator()
const BottomTab = createBottomTabNavigator()

const BottomNavItem = ({ icon, title }) => (
	<TouchableOpacity style={[styles.col, { alignContent: "center" }]}>
		<Button icon="camera" />
		<Text style={styles.textCenter}>Cadastro</Text>
	</TouchableOpacity>
)

const BottomNavItemGroup = () => (
	<View style={{ justifyContent: "space-around", flexDirection: "row" }}>
		<BottomNavItem icon="camera" title="cadastro" />
		<BottomNavItem icon="camera" title="a" />
		<BottomNavItem icon="camera" title="v" />
	</View>
)

const App = () => {
	const [index, setIndex] = React.useState(0)

	const [routes] = React.useState([
		{ key: "music", title: "Acount", icon: "queue-music" },
		{ key: "albums", title: "Albums", icon: "album" },
		{ key: "recents", title: "Recents", icon: "history" },
	])

	return (
		<NavigationContainer>
			<PaperProvider theme={theme}>
				<BottomTab.Navigator
					lazy={false}
					tabBar={() => <BottomNavItemGroup />}
				>
					<BottomTab.Screen name="acc" component={Acc} />
					<BottomTab.Screen
						name="agendamentos"
						component={Agendamentos}
					/>
					<BottomTab.Screen name="cadastro" component={Cadastro} />
				</BottomTab.Navigator>
			</PaperProvider>
		</NavigationContainer>
	)
}

export default App
