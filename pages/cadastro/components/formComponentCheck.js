import * as React from "react";
import { Checkbox } from "react-native-paper";

const MyComponent = () => {
	const [checked, setChecked] = React.useState(false);

	return (
		<Checkbox
			status={"checked"}
			checked={true}
			onPress={() => {
				setChecked(!checked);
			}}
		/>
	);
};

export default MyComponent;
