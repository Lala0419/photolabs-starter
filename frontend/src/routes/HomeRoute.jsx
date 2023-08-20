import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
	const [display, setDisplay] = useState(0);

	const displayHandler = () => {
		console.log(display);
		setDisplay((prev) => prev + 1);
	};

	// const displayHandler = (props) => {
	// 	props === "plus" && setDisplay((prev) => prev + 1);
	// 	props === "minus" && setDisplay((prev) => prev - 1);
	// };

	return (
		<div className="home-route">
			<TopNavigation topicData={props.topicData} display={display} />
			<PhotoList photoData={props.photoData} displayHandler={displayHandler} />
		</div>
	);
};

export default HomeRoute;
