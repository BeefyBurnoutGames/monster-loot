import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import { Route } from 'react-router'
import { Routes, Navigate } from 'react-router-dom'
import MonsterList from './screens/MonsterList'

function App() {
	// const [greetMsg, setGreetMsg] = useState('')
	// const [name, setName] = useState('')

	// async function greet() {
	// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
	// 	setGreetMsg(await invoke('greet', { name }))
	// }

	return (
		<main className="h-screen w-screen bg-background text-gray-400">
			<Routes>
				<Route index element={<MonsterList />} />
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		</main>
	)
}

export default App
