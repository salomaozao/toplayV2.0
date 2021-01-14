import * as React from "react"
import "react-native-gesture-handler"
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
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//pages
import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition"
import Acc from "./pages/acc/index"

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
// const bottomTab = createBottomTabNavigator()

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
				<Stack.Navigator>
					<Stack.Screen name="acc" component={Acc} />
					<Stack.Screen
						name="agendamentos"
						component={Agendamentos}
					/>
				</Stack.Navigator>
			</PaperProvider>
		</NavigationContainer>
	)
}

export default App

