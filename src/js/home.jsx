import React from "react";
import Navbar from './component/Navbar/Navbar';
import Jumbotron from './component/Jumbotron/Jumbotron';
import Card from './component/Cards/Card';
import Footer from './component/Footer/Footer'

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="cards-container">
			<Card title="Card Title 1" text="Some quick example text to build on the card title." imageUrl="https://images.unsplash.com/photo-1695805860640-6d0d0e7f9291?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"/>
			<Card title="Card Title 1" text="Some quick example text to build on the card title." imageUrl="https://images.unsplash.com/photo-1695805860640-6d0d0e7f9291?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"/>
			<Card title="Card Title 1" text="Some quick example text to build on the card title." imageUrl="https://images.unsplash.com/photo-1695805860640-6d0d0e7f9291?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"/>
			<Card title="Card Title 1" text="Some quick example text to build on the card title." imageUrl="https://images.unsplash.com/photo-1695805860640-6d0d0e7f9291?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"/>
			</div>
			<Footer/> 
		</div>
	);
};

export default Home;