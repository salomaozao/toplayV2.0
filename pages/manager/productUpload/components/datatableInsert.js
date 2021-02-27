import React, { useState } from "react"
import { TextInput as NativeInput } from "react-native"
import {
	DataTable,
	Avatar,
	Colors,
	TextInput,
	IconButton,
} from "react-native-paper"
import { Text, View } from "react-native"
import styles from "../../../styles/styles"

//foreach added item in content make a Datatable.Row conaining removeBttn and TextInputs
//Confirmation

//DIAS DISPONIVEIS?
//DATATABLE.ROW? FUCK DATATABLE
const DatatableAdd = ({ setAdding, contentState }) => {
	function add(val) {
		contentState.setContent([...contentState.content, val])
	}

	const [labelVal, setLabelVal] = useState("")
	const [contVal, setContVal] = useState("")

	return (
		<View
			style={[
				{
					justifyContent: "space-between",
					flexDirection: "row",
					paddingVertical: 10,
				},
				styles.borderVertical,
				styles.borderDark,
			]}
		>
			<TextInput
				value="Banheiro"
				mode="outlined"
				value={labelVal}
				onKeyPress={(text) => setLabelVal(text)}
				style={[
					{
						backgroundColor: "rgba(0,0,0,0,)",
						width: "35%",
					},
					styles.ml2,
				]}
			/>
			<IconButton
				icon="bookmark-remove"
				style={{ top: 10 }}
				color={Colors.grey200}
				onPress={() => setAdding(false)}
			/>
			<IconButton
				icon="bookmark-check"
				style={{ top: 10 }}
				color={Colors.grey200}
				onPress={() => add()} //STATE NOT WORKING
			/>
			<NativeInput
				placeholder="disp./quant."
				mode="outlined"
				value={contVal}
				onKeyPress={(text = "a") => setContVal(text)}
				style={[
					styles.mr2,
					{
						backgroundColor: "rgba(0,0,0,0,)",
					},
				]}
			/>
		</View>
	)
}

const DataTableCustom = () => {
	const [content, setContent] = useState({ name: "Gabriel" })
	const [isAdding, setAdding] = useState(false)

	const [page, setPage] = useState(0)
	return (
		<DataTable>
			{/* {content.forEach(el => {
				
			});} */}

			{isAdding ? (
				<DatatableAdd
					setAdding={setAdding}
					contentState={[content, setContent]}
				/>
			) : (
				<></>
			)}
			<IconButton
				style={{ width: "99%" }}
				icon="bookmark-plus"
				onPress={() => setAdding(true)}
			/>

			<DataTable.Pagination
				page={page}
				numberOfPages={3}
				onPageChange={(page) => {
					setPage(page)
				}}
				// label={
				// 	<Text style={{ color: Colors.grey400 }}>
				// 		{page + 1} de {pagesContent.length}
				// 	</Text>
				// }
			/>
		</DataTable>
	)
}
export default DataTableCustom
