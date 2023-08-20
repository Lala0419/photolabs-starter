import React, { useState } from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

const PhotoListItem = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const clickHandler = () => {
		setIsFavorite((prev) => !prev);
		!isFavorite && props.displayHandler();
	};

	//console.log(props);
	return (
		<div className="photo-list__item">
			<div className="photo-list__fav-icon" onClick={clickHandler}>
				<FavIcon selected={isFavorite} />
			</div>
			<img className="photo-list__image" src={props.urls.full} />
			<div className="photo-list__user-details">
				<img className="photo-list__user-profile" src={props.user.profile} />
				<div className="photo-list__user-info">
					<h2>{props.user.name}</h2>
					<h2 className="photo-list__user-location">
						{props.location.city} {props.location.country}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PhotoListItem;
