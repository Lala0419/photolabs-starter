import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
	const photos = props.photoData.map((item) => (
		<PhotoListItem
			key={item.id}
			{...item}
			// displayHandler={props.displayHandler}
			// isFavorite={props.isFavorite}
			toggleFavorite={props.toggleFavorite}
			isFavorite={props.isFavorite.includes(item.id)}
			toggleModal={props.toggleModal}
			// displayHandler={props.displayHandler}
			// isFavorite={props.isFavorite}
		/>
	));
	return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
