import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
	const photos = props.photoData.map((item) => (
		<PhotoListItem
			key={item.id}
			{...item}
			displayHandler={props.displayHandler}
			isFavorite={props.isFavorite}
			setModal={props.setModal}
		/>
	));
	return <ul className="photo-list">{photos}</ul>;
};

export default PhotoList;
