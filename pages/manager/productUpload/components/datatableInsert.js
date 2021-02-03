import React, { useState } from "react"
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
const DatatableContentRow = () => (
	<DataTable.Row>
		<IconButton
			icon="bookmark-remove"
			style={{ top: 10 }}
			color={Colors.grey200}
			onPress={() => {}}
		/>
		<TextInput
			value="Banheiro"
			mode="outlined"
			style={[
				{
					backgroundColor: "rgba(0,0,0,0,)",
					width: "40%",
				},
			]}
		/>
	</DataTable.Row>
)

const DataTableCustom = () => {
	const [content, setContent] = useState([])
	const [page, setPage] = useState(0)
	return (
		<DataTable>
			<View>
				<DataTable.Row>
					<DataTable.Cell>
						<Text style={styles.textLight2}>
							{/* {pagesContent[page][0].title} */}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell numeric>
						{/* {pagesContent[page][0].content} */}
					</DataTable.Cell>
				</DataTable.Row>

				<DatatableContentRow />
			</View>

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
