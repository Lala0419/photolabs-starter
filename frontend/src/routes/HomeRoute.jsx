import React, { useState } from "react";
import "../styles/HomeRoute.scss";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";

const HomeRoute = (props) => {
	const [isFavorite, setIsFavorite] = useState([]);

	const toggleFavorite = (photoId) => {
		if (isFavorite.includes(photoId)) {
			setIsFavorite(isFavorite.filter((id) => id !== photoId));
		} else {
			setIsFavorite([...isFavorite, photoId]);
		}
	};

	// const displayHandler = () => {
	// 	console.log(display);
	// 	setDisplay((prev) => prev + 1);
	// };

	// const displayHandler = (props) => {
	// 	props === "plus" && setDisplay((prev) => prev + 1);
	// 	props === "minus" && setDisplay((prev) => prev - 1);
	// };

	return (
		<div className="home-route">
			{/* <TopNavigation topicData={props.topicData} display={display} />
			<PhotoList
				photoData={props.photoData}
				displayHandler={displayHandler}
				setModal={props.setModal} */}
			<TopNavigation topicData={props.topicData} isFavorite={isFavorite} />
			<PhotoList
				photoData={props.photoData}
				isFavorite={isFavorite}
				toggleFavorite={toggleFavorite}
			/>
		</div>
	);
};

export default HomeRoute;
