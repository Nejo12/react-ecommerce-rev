import './categories.styles.scss'

const App = () => {

	const categories = [
		{
			id: 1,
			title: 'Livestock',
			imageUrl: 'https://i.ibb.co/mXRFyTk/diary-cow.jpg'
		},
		{
			id: 2,
			title: 'Vegetables',
			imageUrl: 'https://i.ibb.co/nQ5Kbjh/green-cabbage.jpg'
		},
		{
			id: 3,
			title: 'Spices',
			imageUrl: 'https://i.ibb.co/0YnPYLX/assorted-spices.jpg'
		},
		{
			id: 4,
			title: 'Cereals',
			imageUrl: 'https://i.ibb.co/vVWJWVh/cereals.jpg'
		},
		{
			id: 5,
			title: 'Fruits',
			imageUrl: 'https://i.ibb.co/xf5zp8J/Raspberry.jpg'
		},
	]

	// https://i.ibb.co/vVWJWVh/cereals.jpg
	// https://i.ibb.co/5MfrXkV/fruits.jpg
	// https://i.ibb.co/D9pf6Yt/livestock.jpg
	// https://i.ibb.co/7jhRB0v/spices.jpg
	// https://i.ibb.co/x2XwkK0/vegetables.jpg

	return (
		<div className="categories-container">
			{ categories.map(({ id, title, imageUrl }) => (
				<div className="category-container" key={ id }>
					<img src={ imageUrl } className='background-image' />
					<div className="category-body-container">
						<h2>{ title }</h2>
						<p>View More</p>
					</div>
				</div>
			)
			) }
		</div>)
}

export default App;
