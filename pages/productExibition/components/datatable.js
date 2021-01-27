import React, { useState } from "react"
import { DataTable, Avatar, Colors } from "react-native-paper"
import { Text, View } from "react-native"
import styles from "../../styles/styles"

const pagesContent = [
	[
		{
			title: "Banheiro",
			content: <Avatar.Icon size={24} icon="check" />,
		},

		{
			title: "Chuveiro",
			content: <Avatar.Icon size={24} icon="close" />,
		},
	],

	[
		{
			title: "Churrasqueira",
			content: <Avatar.Icon size={24} icon="close" />,
		},
		{
			title: "Lanches",
			content: <Avatar.Icon size={24} icon="close" />,
		},
	],

	[
		{
			title: "Número de campos",
			content: "3",
		},
		{
			title: "Coletes",
			content: <Avatar.Icon size={24} icon="check" />,
		},
	],
]

const DataTableCustom = () => {
	const [page, setPage] = useState(0)
	return (
		<DataTable>
			<View>
				<DataTable.Row>
					<DataTable.Cell>
						<Text style={styles.textLight2}>
							{pagesContent[page][0].title}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell numeric>
						{pagesContent[page][0].content}
					</DataTable.Cell>
				</DataTable.Row>

				<DataTable.Row>
					<DataTable.Cell>
						<Text style={styles.textLight2}>
							{pagesContent[page][1].title}
						</Text>
					</DataTable.Cell>
					<DataTable.Cell numeric>
						{pagesContent[page][1].content}
					</DataTable.Cell>
				</DataTable.Row>
			</View>

			<DataTable.Pagination
				page={page}
				numberOfPages={3}
				onPageChange={(page) => {
					setPage(page)
				}}
				label={
					<Text style={{ color: Colors.grey400 }}>
						{page + 1} de {pagesContent.length}
					</Text>
				}
			/>
		</DataTable>
	)
}
export default DataTableCustom
