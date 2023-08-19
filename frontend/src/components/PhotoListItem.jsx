import React from "react";

import "../styles/PhotoListItem.scss";
import "../styles/PhotoFavButton.scss";
import FavIcon from "./FavIcon";

const PhotoListItem = (props) => {
	//console.log(props);
	return (
		<div className="photo-list__item">
			<div className="photo-list__fav-icon">
				<FavIcon />
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
