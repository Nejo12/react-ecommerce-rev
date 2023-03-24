const App = () => {

	const categories = [
		{
			id: 1,
			title: 'Livestock'
		},
		{
			id: 2,
			title: 'Vegetables'
		},
		{
			id: 3,
			title: 'Spices'
		},
		{
			id: 4,
			title: 'Cereals'
		},
		{
			id: 5,
			title: 'Fruits'
		},
	]

	return (
		<div className="categories-container">
			{ categories.map(({ title }) => (
				<div className="category-container">
					{/* img */ }
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
