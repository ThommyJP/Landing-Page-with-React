//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { NavBar } from "./component/NavBar";
import { Jumbotron } from "./component/Jumbotron";
import { Cards } from "./component/Cards";
import { Footer } from "./component/Footer";

//render your react application
ReactDOM.render(
	<div>
		<div>
			<NavBar
				LPname="Landing Page"
				DropdownIcon="far fa-caret-square-down"
				LPlogo="fab fa-react"
				LPUrl="#"
				DropdownOp1="Home"
				DropdownOp2="About"
				DropdownOp3="Services"
				DropdownOp4="Contact"
				DropdownOp1URL="#"
				DropdownOp2URL="#"
				DropdownOp3URL="#"
				DropdownOp4URL="#"
			/>
		</div>
		<div className="mr-4 ml-4 mb-5 mt-5 pt-5">
			<div>
				<Jumbotron
					Title="Welcome"
					Header="This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
					Content="It uses utility class Names for typography and spacing to space content out within the larger container."
					ButtonName="Learn more"
				/>
			</div>
			<div className="card-deck">
				<Cards
					ImageURL="https://cdn.britannica.com/06/171306-050-C88DD752/Aurora-borealis-peninsula-Snaefellsnes-Iceland-March-2013.jpg"
					ImageAlt=""
					Title="Aurorar Borealis"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="Descipcion generica 1"
					ExtraContent2="Algo inspiracional 1"
					ExtraContent3="Una cita de alguien famoso 1"
					ButtonContent="Descrubre mas aqui"
				/>
				<Cards
					ImageURL="https://www.worldatlas.com/r/w1200/upload/8a/0c/7b/shutterstock-358038821.jpg"
					ImageAlt=""
					Title="Patos"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="Descipcion generica 2"
					ExtraContent2="Algo inspiracional 2"
					ExtraContent3="Una cita de alguien famoso 2"
					ButtonContent="Descrubre mas aqui"
				/>
				<Cards
					ImageURL="https://ecophiles.com/wp-content/uploads/2017/09/Crater-Lake-759x500.jpg"
					ImageAlt=""
					Title="Panorama"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="Descipcion generica 3"
					ExtraContent2="Algo inspiracional 3"
					ExtraContent3="Una cita de alguien famoso 3"
					ButtonContent="Descrubre mas aqui"
				/>
				<Cards
					ImageURL="https://cdn.kimkim.com/files/a/content_articles/featured_photos/01d0ebb606a2065f0ecc8a3112ec85e67d9b2005/big-69cd90f23b17d410f24ca2af3fb95840.jpg"
					ImageAlt=""
					Title="Noruega"
					Content="Some quick example text to build on the card
					title and make up the bulk of the cards content."
					ExtraContent1="Descipcion generica 4"
					ExtraContent2="Algo inspiracional 4"
					ExtraContent3="Una cita de alguien famoso 4"
					ButtonContent="Descrubre mas aqui"
				/>
			</div>
		</div>
		<div>
			<Footer />
		</div>
	</div>,
	document.querySelector("#app")
);
