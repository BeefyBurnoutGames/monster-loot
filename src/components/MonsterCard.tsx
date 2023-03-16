export default function MonsterCard() {
	return (
		<div className="flex space-x-2 select-none group">
			<div className="h-20 w-20 bg-secondary group-hover:bg-secondary/75 group-active:bg-secondary/50 flex items-center justify-center transition-colors group-hover:duration-0">
				Image
			</div>
			<div className="bg-secondary flex items-center flex-1 p-2 group-hover:bg-secondary/75 group-active:bg-secondary/50 transition-colors group-hover:duration-0">
				Content
			</div>
		</div>
	)
}
