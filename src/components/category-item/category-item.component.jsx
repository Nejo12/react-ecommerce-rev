import './category-item.styles.scss'

const CategoryItem = ({ category }) => {

  const { imageUrl, title } = category;
  return (
    <div className="category-container" key={ title }>
      <img src={ imageUrl } className='background-image' />
      <div className="category-body-container">
        <h2>{ title }</h2>
        <p>View More</p>
      </div>
    </div>
  )

}

export default CategoryItem