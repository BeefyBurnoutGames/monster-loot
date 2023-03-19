import MonsterCard from '../components/MonsterCard'

export default function MonsterList() {
	return (
		<div className="p-2 flex flex-col space-y-2 max-h-screen overflow-clip">
			<div className="bg-secondary min-h-[40vh]">Content</div>
			<div className="border border-secondary flex flex-col space-y-2 p-2 overflow-y-scroll">
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
				<MonsterCard />
			</div>
		</div>
	)
}
