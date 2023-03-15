import pocketbaseEs, { Record } from 'pocketbase'
import { useEffect, useState } from 'react'
import { Button, StyleSheet } from 'react-native'

import { Text, View } from '../../components/Themed'

const pb = new pocketbaseEs('http://127.0.0.1:8090')

export default function TabOneScreen() {
	const [data, setData] = useState<Record[]>([])

	useEffect(() => {
		pb.collection('posts')
			.getFullList()
			.then((res) => {
				setData(res)
			})
	}, [])

	return (
		<View style={styles.container}>
			<Text style={styles.title}>
				{data.map((el, index) => (
					<View className="text-center" key={index}>
						<Text key={index}>{el.id}</Text>
						<Text key={index}>{el.title}</Text>
						<Text key={index}>{el.content}</Text>
					</View>
				))}
			</Text>
			<View
				style={styles.separator}
				lightColor="#eee"
				darkColor="rgba(255,255,255,0.1)"
			/>
			<Button title="Click Me" onPress={() => console.log("YOU's DA GEI")} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
})
