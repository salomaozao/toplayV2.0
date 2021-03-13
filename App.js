//basic shit
import React from "react"

import { SafeAreaView } from "react-native"
import {
	DefaultTheme,
	Provider as PaperProvider,
	Colors,
} from "react-native-paper"

//navigation
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

//pages
import Agendamentos from "./pages/agendamentos/index"
import Cadastro from "./pages/cadastro/index"
import ProductView from "./pages/productExibition/index"
import Acc from "./pages/acc/index"
import Login from "./pages/login/index"
import MainPage from "./pages/mainPage/index"
import Payment from "./pages/payment/index"
import TermsAndConditions from "./pages/termsAndConditions/termsAndConditions"

//admin pages
import Manager_PageUplaod from "./pages/manager/productUpload/index"
import Manager_ProductListing from "./pages/manager/productListing/index"

//components
import Footer from "./pages/generalComponents/footer"

const theme = {
	...DefaultTheme,
	roundness: 2,
	colors: {
		...DefaultTheme.colors,
		primary: Colors.blue500,
		accent: Colors.green300,
		// background: Colors.green900,
		surface: Colors.grey800,
		text: Colors.grey700,
	},
}

const BottomTab = createBottomTabNavigator()

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<NavigationContainer>
				<PaperProvider theme={theme}>
					<BottomTab.Navigator
						lazy={true}
						tabBar={({ navigation }) => (
							<Footer navigation={navigation} />
						)}
					>
						<BottomTab.Screen
							name="main"
							component={MainPage}
							initialParams={{ userId: "0001" }}
						/>

						<BottomTab.Screen
							name="product"
							component={ProductView}
						/>

						<BottomTab.Screen name="payment" component={Payment} />

						<BottomTab.Screen name="acc" component={Acc} />

						<BottomTab.Screen name="login" component={Login} />

						<BottomTab.Screen
							name="agendamentos"
							component={Agendamentos}
						/>
						<BottomTab.Screen
							name="cadastro"
							component={Cadastro}
						/>

						<BottomTab.Screen
							name="termsAndConditions"
							component={TermsAndConditions}
						/>

						<BottomTab.Screen
							name="manager_upload"
							component={Manager_PageUplaod}
						/>

						<BottomTab.Screen
							name="manager_ProductListing"
							component={Manager_ProductListing}
						/>

						<BottomTab.Screen
							name="test"
							component={Manager_ProductListing}
						/>
					</BottomTab.Navigator>
				</PaperProvider>
			</NavigationContainer>
			{/* </UploadyWrapper> */}
		</SafeAreaView>
	)
}

export default App
