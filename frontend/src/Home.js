import React from 'react'
import Navbar from './components/shared components/Navbar';
import ItemCard from './components/ItemCard';
import ItemList from './components/ItemList';
import itemListTab from './components/itemListTab';
const Home = () => {
  return (
    <div>
<Navbar/>
<ItemList/>
<itemListTab/>
</div>
  )
}

export default Home