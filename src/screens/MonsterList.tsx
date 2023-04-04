import { Link } from 'react-router-dom'
import MonsterCard from '../components/MonsterCard'
import { useEffect, useState } from 'react'
import { POCKETBASE_URL } from '../api/api'

type Monster = {
	id: string
	name: string
	book: string
	monster_loot: string[]
	image: string
}

const perPage = 10

export default function MonsterList() {
	const [monsters, setMonsters] = useState<Monster[]>([])
	const [page, setPage] = useState(1)
	const [totalPages, setTotalPages] = useState(1)

	useEffect(() => {
		loadMonsters()
	})

	async function loadMonsters() {
		if (page > totalPages) return
		const response = await fetch(
			`${POCKETBASE_URL}api/collections/monsters/records?page=${page}&perPage=${perPage}`,
		)
		const data = await response.json()
		setMonsters(data.items)
		setTotalPages(data.totalPages)
	}

	return (
		<div className="p-2 flex flex-col space-y-2 max-h-screen overflow-clip">
			<div className="bg-secondary min-h-[40vh]">
				<Link to="/" className="p-2 bg-background font-medium">
					Back
				</Link>
			</div>
			<div className="border border-secondary flex flex-col space-y-2 p-2 overflow-y-scroll">
				{monsters.map((monster, index) => (
					<MonsterCard key={index} src={monster.image} name={monster.name} />
				))}
			</div>
		</div>
	)
}
