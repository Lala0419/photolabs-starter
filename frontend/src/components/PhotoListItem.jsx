import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
	//console.log(props);
	return (
		<div className="photo-list__item">
			<img className="photo-list__image" src={props.data.urls.full} />
			<div className="photo-list__user-details">
				<img
					className="photo-list__user-profile"
					src={props.data.user.profile}
				/>
				<div className="photo-list__user-info">
					<h2>{props.data.user.name}</h2>
					<h2 className="photo-list__user-location">
						{props.data.location.city} {props.data.location.country}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default PhotoListItem;
