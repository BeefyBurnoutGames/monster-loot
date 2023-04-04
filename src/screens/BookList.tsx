import { useState } from 'react'
import { Link } from 'react-router-dom'

const mockData: Book[] = [
	{
		id: 1,
		title: 'The Hobbit',
	},
	{
		id: 2,
		title: 'The Lord of the Rings',
	},
	{
		id: 3,
		title: 'The Silmarillion',
	},
	{
		id: 4,
		title: 'The Children of Hurin',
	},
	{
		id: 5,
		title: 'The Fall of Gondolin',
	},
	{
		id: 6,
		title: 'The History of Middle-earth',
	},
	{
		id: 7,
		title: 'The Book of Lost Tales',
	},
]

interface Book {
	id: number
	title: string
}

export default function BookList() {
	const [books, setBooks] = useState<Book[]>([...mockData])

	return (
		<div className="p-2">
			{books.map((book, index) => (
				<Link key={index} className="bg-secondary" to={`/book/${book.id}`}>
					<div>{book.title}</div>
				</Link>
			))}
		</div>
	)
}
