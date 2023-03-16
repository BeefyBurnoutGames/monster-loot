import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'

function App() {
	const [greetMsg, setGreetMsg] = useState('')
	const [name, setName] = useState('')

	async function greet() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		setGreetMsg(await invoke('greet', { name }))
	}

	return (
		<div className="flex items-center justify-center w-screen h-screen bg-slate-900">
			<h1 className="text-slate-500 font-light text-4xl">Welcome to Tauri!</h1>
		</div>
	)
}

export default App
