import React from "react"
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper"

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />

const CardCustom = () => (
	<Card>
		<Card.Title
			title="Quadra são João"
			subtitle="Disponível nos dias de semana"
		/>
		<Card.Cover source={{ uri: "https://picsum.photos/700" }} />

		<Card.Actions>
			<Button>Like</Button>
			<Button>Dislike</Button>
		</Card.Actions>
	</Card>
)

export default Card
