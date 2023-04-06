import Directory from '../../components/directory/directory.component';

const Home = () => {

  const categories = [ {
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
  } ]

  return (
    <Directory categories={ categories } />
  )
}

export default Home